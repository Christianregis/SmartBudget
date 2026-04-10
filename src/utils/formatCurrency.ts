
// Fonctions utilitaires pour formater les montants
export const formatCurrency = (amount: number): string => {

  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'CFA',
  }).format(amount)
}

// Fonction pour formater les dates en français
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString)


  return new Intl.DateTimeFormat('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}
