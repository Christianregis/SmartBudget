
// Fonctions utilitaires pour formater les montants
export const formatCurrency = (amount: number): string => {

  // Affiche le montant formaté dans la console pour vérifier le résultat
  console.log(new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'CFA',
  }).format(amount))

  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'CFA',
  }).format(amount)
}

// Fonction pour formater les dates en français
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString)

  // Affiche la date formatée dans la console pour vérifier le résultat
  console.log(Intl.DateTimeFormat('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date))


  return new Intl.DateTimeFormat('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}
