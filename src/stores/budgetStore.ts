import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface Transaction {
  id: string
  title: string
  amount: number
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
    // Ajouter la transaction à la liste ( en utilisant les ... appellee operateur spread pour creer une nouvelle array avec les elements existants et le nouvel element )
    transactions.value = [...transactions.value, transaction]
    saveTransactions()
  }

  // Supprimer une transaction
  const deleteTransaction = (id: string) => {
    transactions.value = transactions.value.filter(t => t.id !== id)
    saveTransactions()
  }

  // Calculs réactifs
  const totalIncome = computed(() => {
    return transactions.value
      .filter(t => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0)
  })

  const totalExpense = computed(() => {
    return transactions.value
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0)
  })

  const balance = computed(() => {
    return totalIncome.value - totalExpense.value
  })

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
