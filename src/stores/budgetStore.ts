import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface Transaction {
  id: string
  title: string
  amount: number
  // Income = revenu, Expense = dépense
  type: 'income' | 'expense'
  date: string
}

export const useBudgetStore = defineStore('budget', () => {
  const transactions = ref<Transaction[]>([])

  // Charger les données depuis localStorage au démarrage
  const loadTransactions = () => {
    const saved = localStorage.getItem('smartbudget_transactions')
    if (saved) {
      transactions.value = JSON.parse(saved)
    }
  }

  // Sauvegarder les transactions dans localStorage
  const saveTransactions = () => {
    localStorage.setItem('smartbudget_transactions', JSON.stringify(transactions.value))
  }

  // Ajouter une transaction
  const addTransaction = (title: string, amount: number, type: 'income' | 'expense') => {
    const transaction: Transaction = {
      id: Date.now().toString(),
      title,
      amount,
      type,
      date: new Date().toISOString().split('T')[0],
    }
    // Ajouter la transaction à la liste ( en utilisant les ... appellee operateur spread (pour Etaler) pour creer une nouvelle array avec les elements existants et le nouvel element )
    transactions.value = [...transactions.value, transaction]
    saveTransactions()
  }

  // Supprimer une transaction
  const deleteTransaction = (id: string) => {
    transactions.value = transactions.value.filter(t => t.id !== id)
    saveTransactions()
  }

  // Calculs réactifs

  // Total des revenus
  const totalIncome = computed(() => {
    return transactions.value
      .filter(t => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0)
  })

  // Calcul du total des dépenses ( en filtrant les transactions pour ne garder que celles de type 'expense' et en utilisant reduce (Transformer un tableau en une seule valeur) pour sommer les montants )
  const totalExpense = computed(() => {
    return transactions.value
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0)
  })

  // Solde = Revenus - Dépenses
  const balance = computed(() => {
    return totalIncome.value - totalExpense.value
  })

  // Transactions récentes ( les 5 dernières )
  const recentTransactions = computed(() => {
    return transactions.value.slice(0, 5)
  })

  return {
    transactions,
    loadTransactions,
    saveTransactions,
    addTransaction,
    deleteTransaction,
    totalIncome,
    totalExpense,
    balance,
    recentTransactions,
  }
})
