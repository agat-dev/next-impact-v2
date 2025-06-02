"use client"

import { jsPDF } from "jspdf"
import "jspdf-autotable"

// Définition des couleurs
const COLORS = {
  primary: [30,84,191], // Bleu principal
  secondary: [2,19,115], // Bleu foncé
  accent: [240,245,251], // Orange accent
  light: [240,245,251], // Bleu très clair pour les fonds
  text: [2,19,115], // Gris foncé pour le texte
  lightText: [32,43,128], // Gris clair pour le texte secondaire
}

export async function generatePDF(formData: Record<string, any>) {
  // Création du document PDF
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  })

  // Ajout de polices (utilisation des polices par défaut de jsPDF)
  const titleFontSize = 20
  const sectionFontSize = 16
  const subsectionFontSize = 12
  const normalFontSize = 10
  const smallFontSize = 8

  // Marges et dimensions
  const margin = 20
  const pageWidth = doc.internal.pageSize.getWidth()
  const contentWidth = pageWidth - margin * 2

  // Fonction pour ajouter un en-tête à chaque page
  const addHeader = () => {
    // Rectangle d'en-tête
    doc.setFillColor(COLORS.primary[0], COLORS.primary[1], COLORS.primary[2])
    doc.rect(0, 0, pageWidth, 15, "F")

    // Titre du document en blanc
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(12)
    doc.setFont("helvetica", "bold")
    doc.text("CAHIER DES CHARGES", margin, 10)

    // Date en blanc alignée à droite
    const today = new Date().toLocaleDateString()
    doc.setFontSize(8)
    doc.setFont("helvetica", "normal")
    doc.text(today, pageWidth - margin, 10, { align: "right" })

    // Ligne de séparation
    doc.setDrawColor(COLORS.accent[0], COLORS.accent[1], COLORS.accent[2])
    doc.setLineWidth(0.5)
    doc.line(margin, 15, pageWidth - margin, 15)
  }

  // Fonction pour ajouter un pied de page à chaque page
  const addFooter = (pageNumber: number) => {
    const totalPages = doc.internal.getNumberOfPages()

    // Ligne de séparation
    doc.setDrawColor(COLORS.primary[0], COLORS.primary[1], COLORS.primary[2])
    doc.setLineWidth(0.3)
    doc.line(margin, doc.internal.pageSize.getHeight() - 15, pageWidth - margin, doc.internal.pageSize.getHeight() - 15)

    // Informations du pied de page
    doc.setTextColor(COLORS.lightText[0], COLORS.lightText[1], COLORS.lightText[2])
    doc.setFontSize(8)
    doc.setFont("helvetica", "normal")

    // Nom de l'organisation à gauche
    const orgName = formData.organisation_name || "Cahier des charges"
    doc.text(orgName, margin, doc.internal.pageSize.getHeight() - 10)

    // Numéro de page au centre
    doc.text(`Page ${pageNumber} / ${totalPages}`, pageWidth / 2, doc.internal.pageSize.getHeight() - 10, {
      align: "center",
    })

    // Version à droite
    const version = `Version: ${formData.version || "1.0"}`
    doc.text(version, pageWidth - margin, doc.internal.pageSize.getHeight() - 10, { align: "right" })
  }

  // Ajout de la page de couverture
  const addCoverPage = () => {
    // Fond de page légèrement coloré
    doc.setFillColor(COLORS.light[0], COLORS.light[1], COLORS.light[2])
    doc.rect(0, 0, pageWidth, doc.internal.pageSize.getHeight(), "F")

    // Rectangle d'en-tête
    doc.setFillColor(COLORS.primary[0], COLORS.primary[1], COLORS.primary[2])
    doc.rect(0, 0, pageWidth, 40, "F")

    // Titre principal
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(24)
    doc.setFont("helvetica", "bold")
    doc.text("CAHIER DES CHARGES", pageWidth / 2, 25, { align: "center" })

    // Sous-titre
    doc.setFontSize(14)
    doc.text("Refonte de Site Vitrine Institutionnel", pageWidth / 2, 35, { align: "center" })

    // Informations du projet
    doc.setTextColor(COLORS.secondary[0], COLORS.secondary[1], COLORS.secondary[2])
    doc.setFontSize(16)
    doc.setFont("helvetica", "bold")
    doc.text("Informations du projet", pageWidth / 2, 70, { align: "center" })

    // Rectangle décoratif
    doc.setDrawColor(COLORS.accent[0], COLORS.accent[1], COLORS.accent[2])
    doc.setLineWidth(1)
    doc.line(margin + 30, 75, pageWidth - margin - 30, 75)

    // Informations principales
    doc.setTextColor(COLORS.text[0], COLORS.text[1], COLORS.text[2])
    doc.setFontSize(12)
    doc.setFont("helvetica", "normal")

    let yPos = 90

    // Organisation
    doc.setFont("helvetica", "bold")
    doc.text("Organisation:", margin + 10, yPos)
    doc.setFont("helvetica", "normal")
    doc.text(formData.organisation_name || "Non spécifié", margin + 60, yPos)
    yPos += 10

    // Secteur d'activité
    doc.setFont("helvetica", "bold")
    doc.text("Secteur d'activité:", margin + 10, yPos)
    doc.setFont("helvetica", "normal")
    doc.text(formData.secteur_activite || "Non spécifié", margin + 60, yPos)
    yPos += 10

    // Date de création
    doc.setFont("helvetica", "bold")
    doc.text("Date de création:", margin + 10, yPos)
    doc.setFont("helvetica", "normal")
    doc.text(formData.date_redaction || new Date().toLocaleDateString(), margin + 60, yPos)
    yPos += 10

    // Rédacteur
    doc.setFont("helvetica", "bold")
    doc.text("Rédacteur:", margin + 10, yPos)
    doc.setFont("helvetica", "normal")
    doc.text(formData.redacteur || "Non spécifié", margin + 60, yPos)

    // Rectangle décoratif en bas
    doc.setFillColor(COLORS.primary[0], COLORS.primary[1], COLORS.primary[2])
    doc.rect(0, doc.internal.pageSize.getHeight() - 20, pageWidth, 20, "F")

    // Texte en bas
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(10)
    doc.text("Document confidentiel", pageWidth / 2, doc.internal.pageSize.getHeight() - 10, { align: "center" })
  }

  // Fonction pour ajouter une section
  const addSection = (title: string, yPos: number): number => {
    // Vérifier s'il reste assez d'espace sur la page
    if (yPos > 250) {
      doc.addPage()
      addHeader()
      addFooter(doc.internal.getNumberOfPages())
      yPos = 30
    }

      // Marge extérieure supérieure pour le rectangle de section
    const outerMarginTop = 8
    yPos += outerMarginTop

    // Rectangle coloré derrière le titre de section avec marges internes haut/bas et bordures arrondies
    const sectionRectHeight = 14 // 10 (original) + 4 de marge interne en bas
    const sectionRectY = yPos - 7 // 5 (original) + 2 de marge interne en haut
    const sectionRectRadius = 3   // Rayon pour les coins arrondis

    doc.setFillColor(COLORS.primary[0], COLORS.primary[1], COLORS.primary[2])
    doc.roundedRect(margin - 5, sectionRectY, contentWidth + 10, sectionRectHeight, sectionRectRadius, sectionRectRadius, "F")

    // Titre de section en blanc
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(sectionFontSize)
    doc.setFont("helvetica", "bold")
    doc.text(title, margin, yPos)

    return yPos + 15 + 4 // 15 (original) + 4 de marge interne en bas
  }

  // Fonction pour ajouter une sous-section
  const addSubsection = (title: string, yPos: number): number => {
    // Vérifier s'il reste assez d'espace sur la page
    if (yPos > 260) {
      doc.addPage()
      addHeader()
      addFooter(doc.internal.getNumberOfPages())
      yPos = 30
    }

    // Titre de sous-section avec couleur accent
    doc.setTextColor(COLORS.secondary[0], COLORS.secondary[1], COLORS.secondary[2])
    doc.setFontSize(subsectionFontSize)
    doc.setFont("helvetica", "bold")
    doc.text(title, margin, yPos)

    // Ligne de séparation sous le titre
    doc.setDrawColor(COLORS.accent[0], COLORS.accent[1], COLORS.accent[2])
    doc.setLineWidth(0.3)
    doc.line(margin, yPos + 1, margin + doc.getTextWidth(title) + 10, yPos + 1)

    return yPos + 8
  }
  // Fonction pour ajouter du texte
  const addText = (label: string, value: string, yPos: number): number => {
    // Vérifier s'il reste assez d'espace sur la page
    if (yPos > 260) {
      doc.addPage()
      addHeader()
      addFooter(doc.internal.getNumberOfPages())
      yPos = 30
    }

    // Label en gras
    doc.setTextColor(COLORS.text[0], COLORS.text[1], COLORS.text[2])
    doc.setFontSize(normalFontSize)
    doc.setFont("helvetica", "bold")
    doc.text(`${label}: `, margin - 5, yPos)

    // Valeur en normal
    doc.setFont("helvetica", "normal")

    // Gestion du texte long avec retour à la ligne
    const labelWidth = doc.getTextWidth(`${label}: `)
    // Ajout d'une marge à droite de 4rem (~40mm)
    const rightMargin = 40
    const textWidth = contentWidth - labelWidth - rightMargin
    const splitText = doc.splitTextToSize(value || "Non spécifié", textWidth)

    doc.text(splitText, margin + labelWidth, yPos)

    // Ajouter un léger fond gris pour les zones de texte longues si plus d'une ligne
    if (splitText.length > 1) {
      doc.setFillColor(248, 249, 250) // Gris très clair
      doc.roundedRect(margin + labelWidth - 2, yPos - 4, textWidth + 4, splitText.length * 5 + 2, 1, 1, "F")

      // Redessiner le texte par-dessus le rectangle
      doc.setTextColor(COLORS.text[0], COLORS.text[1], COLORS.text[2])
      doc.text(splitText, margin + labelWidth, yPos)
    }

    return yPos + Math.max(splitText.length * 5, 6) + 2
  }

  // Fonction pour ajouter une liste de cases à cocher
  const addCheckboxList = (items: Record<string, boolean>, yPos: number): number => {
    // Vérifier s'il reste assez d'espace sur la page
    if (yPos > 260) {
      doc.addPage()
      addHeader()
      addFooter(doc.internal.getNumberOfPages())
      yPos = 30
    }

    doc.setFontSize(normalFontSize)
    doc.setFont("helvetica", "normal")
    doc.setTextColor(COLORS.text[0], COLORS.text[1], COLORS.text[2])
    // Fond gris clair pour la liste, élargi dynamiquement selon la largeur du texte le plus long
    const entries = Object.entries(items || {})
    let maxTextWidth = 0
    entries.forEach(([key]) => {
      const width = doc.getTextWidth(key)
      if (width > maxTextWidth) maxTextWidth = width
    })
    // Largeur totale = largeur case + espace + largeur texte + marge droite
    const boxWidth = 4
    const space = 6 // espace entre case et texte
    const labelTextSpace = 8 // espace entre la case et le texte de l'option (modifié ici)
    const rightMargin = 20
    const rectWidth = boxWidth + labelTextSpace + maxTextWidth + rightMargin

    const itemCount = entries.length
    if (itemCount > 0) {
      doc.setFillColor(248, 249, 250) // Gris très clair
      doc.roundedRect(margin - 2, yPos, rectWidth, itemCount * 6 + 2, 2, 2, "F")
    }

    Object.entries(items || {}).forEach(([key, checked]) => {
      // Case à cocher stylisée
      if (checked) {
        // Case cochée avec couleur accent
        doc.setFillColor(COLORS.accent[0], COLORS.accent[1], COLORS.accent[2])
        doc.roundedRect(margin, yPos - 3, boxWidth, boxWidth, 0.5, 0.5, "F")

        // Coche blanche
        doc.setTextColor(255, 255, 255)
        doc.text("✓", margin + 0.5, yPos)
      } else {
        // Case non cochée
        doc.setDrawColor(COLORS.lightText[0], COLORS.lightText[1], COLORS.lightText[2])
        doc.roundedRect(margin, yPos - 3, boxWidth, boxWidth, 0.5, 0.5, "D")
      }

      // Retour à la ligne pour placer le texte de l'option en dessous de la case
      yPos += 8

      doc.setTextColor(COLORS.text[0], COLORS.text[1], COLORS.text[2])
      doc.text(key, margin, yPos)

      yPos += 18

      // Vérifier si on doit passer à une nouvelle page
      if (yPos > 260) {
        doc.addPage()
        addHeader()
        addFooter(doc.internal.getNumberOfPages())
        yPos = 30
      }
    })

    return yPos + 2
  }


  // Création de la page de couverture
  addCoverPage()

  // Ajout d'une nouvelle page pour le contenu
  doc.addPage()
  addHeader()
  addFooter(doc.internal.getNumberOfPages())

  // Position de départ pour le contenu
  let yPosition = 30

  // Table des matières
  doc.setTextColor(COLORS.secondary[0], COLORS.secondary[1], COLORS.secondary[2])
  doc.setFontSize(16)
  doc.setFont("helvetica", "bold")
  doc.text("TABLE DES MATIÈRES", pageWidth / 2, yPosition, { align: "center" })
  yPosition += 10

  // Liste des sections dans la table des matières
  doc.setTextColor(COLORS.text[0], COLORS.text[1], COLORS.text[2])
  doc.setFontSize(10)
  doc.setFont("helvetica", "normal")

  const sections = [
    "1. PRÉSENTATION GÉNÉRALE DU PROJET",
    "2. SPÉCIFICATIONS FONCTIONNELLES",
    "3. SPÉCIFICATIONS GRAPHIQUES ET ERGONOMQUES",
    "4. SPÉCIFICATIONS TECHNIQUES",
    "5. GESTION DE CONTENU",
    "6. PRESTATIONS ATTENDUES",
    "7. PLANNING ET BUDGET",
    "8. MODALITÉS DE RÉPONSE À L'APPEL D'OFFRES",
    "9. ANNEXES",
  ]

  sections.forEach((section, index) => {
    doc.text(section, pageWidth / 2, yPosition + index * 6, { align: "center" })
  })

  // Nouvelle page pour le contenu principal
  doc.addPage()
  addHeader()
  addFooter(doc.internal.getNumberOfPages())
  yPosition = 30

  // Section 1: Présentation Générale du Projet
  yPosition = addSection("1. PRÉSENTATION GÉNÉRALE DU PROJET", yPosition)

  yPosition = addSubsection("1.1 Contexte", yPosition)
  yPosition = addText("Nom de l'organisation", formData.organisation_name || "", yPosition)
  yPosition = addText("Secteur d'activité", formData.secteur_activite || "", yPosition)
  yPosition = addText("Public cible", formData.public_cible || "", yPosition)
  yPosition = addText("Problématiques identifiées", formData.problematiques || "", yPosition)
  yPosition = addText("Objectifs principaux", formData.objectifs_refonte || "", yPosition)

  yPosition = addSubsection("1.2 Description du site existant", yPosition)
  yPosition = addText("URL du site actuel", formData.site_url || "", yPosition)
  yPosition = addText("Date de création", formData.site_creation_date || "", yPosition)
  yPosition = addText("Technologies utilisées", formData.technologies_actuelles || "", yPosition)

  // Section 2: Spécifications Fonctionnelles
  yPosition = addSection("2. SPÉCIFICATIONS FONCTIONNELLES", yPosition)

  yPosition = addSubsection("2.1 Architecture de l'information", yPosition)
  yPosition = addText("Arborescence proposée", formData.arborescence || "", yPosition)
  yPosition = addText("Types de contenus", formData.types_contenus || "", yPosition)

  yPosition = addSubsection("2.2 Fonctionnalités standards", yPosition)
  if (formData.fonctionnalites_standards) {
    yPosition = addCheckboxList(formData.fonctionnalites_standards, yPosition)
  }

  yPosition = addSubsection("2.3 Fonctionnalités avancées", yPosition)
  if (formData.fonctionnalites_avancees) {
    yPosition = addCheckboxList(formData.fonctionnalites_avancees, yPosition)
  }

  yPosition = addText("Contraintes techniques", formData.contraintes_techniques || "", yPosition)

  // Section 3: Spécifications Graphiques et Ergonomiques
  yPosition = addSection("3. SPÉCIFICATIONS GRAPHIQUES ET ERGONOMIQUES", yPosition)

  yPosition = addSubsection("3.1 Charte graphique", yPosition)
  yPosition = addText("Charte existante", formData.charte_existante ? "Oui" : "Non", yPosition)
  yPosition = addText("Nouvelle charte", formData.nouvelle_charte ? "Oui" : "Non", yPosition)
  yPosition = addText("Inspirations", formData.inspirations || "", yPosition)
  yPosition = addText("Couleurs principales", formData.couleurs || "", yPosition)
  yPosition = addText("Typographies", formData.typographies || "", yPosition)
  yPosition = addText("Ambiance visuelle", formData.ambiance || "", yPosition)

  yPosition = addSubsection("3.2 Exigences ergonomiques", yPosition)
  yPosition = addText("Expérience utilisateur", formData.ux_priorites || "", yPosition)

  yPosition = addSubsection("3.3 Responsive design", yPosition)
  yPosition = addText("Formats prioritaires", formData.responsive || "", yPosition)

  // Section 4: Spécifications Techniques
  yPosition = addSection("4. SPÉCIFICATIONS TECHNIQUES", yPosition)

  yPosition = addSubsection("4.1 Technologies souhaitées", yPosition)
  yPosition = addText("CMS/Framework préféré", formData.cms_framework || "", yPosition)
  yPosition = addText("Langages de programmation", formData.langages || "", yPosition)
  yPosition = addText("Base de données", formData.base_donnees || "", yPosition)

  yPosition = addSubsection("4.2 Hébergement et infrastructure", yPosition)
  yPosition = addText("Type d'hébergement", formData.hebergement || "", yPosition)

  yPosition = addSubsection("4.3 Sécurité", yPosition)
  yPosition = addText("Niveau de sécurité", formData.securite || "", yPosition)

  yPosition = addSubsection("4.4 Performance", yPosition)
  yPosition = addText("Temps de chargement", formData.performance || "", yPosition)

  yPosition = addSubsection("4.5 Référencement (SEO)", yPosition)
  yPosition = addText("Exigences SEO", formData.seo || "", yPosition)

  // Section 5: Gestion de Contenu
  yPosition = addSection("5. GESTION DE CONTENU", yPosition)

  yPosition = addSubsection("5.1 Migration de contenu", yPosition)
  yPosition = addText("Volume de contenu", formData.migration_volume || "", yPosition)
  yPosition = addText("Types de contenus", formData.migration_types || "", yPosition)

  yPosition = addSubsection("5.2 Création de contenu", yPosition)
  yPosition = addText("Contenus à créer", formData.contenus_creer || "", yPosition)

  yPosition = addSubsection("5.3 Administration du site", yPosition)
  yPosition = addText("Profils administrateurs", formData.profils_admin || "", yPosition)

  // Section 6: Prestations Attendues
  yPosition = addSection("6. PRESTATIONS ATTENDUES", yPosition)

  yPosition = addSubsection("6.1 Phases du projet", yPosition)
  if (formData.phases_projet) {
    yPosition = addCheckboxList(formData.phases_projet, yPosition)
  }

  yPosition = addSubsection("6.2 Méthodologie de projet", yPosition)
  yPosition = addText("Méthodologie souhaitée", formData.methodologie || "", yPosition)

  yPosition = addSubsection("6.4 Garantie et maintenance", yPosition)
  yPosition = addText("Période de garantie", formData.garantie || "", yPosition)

  // Section 7: Planning et Budget
  yPosition = addSection("7. PLANNING ET BUDGET", yPosition)

  yPosition = addSubsection("7.1 Planning prévisionnel", yPosition)
  yPosition = addText("Date de démarrage", formData.date_demarrage || "", yPosition)
  yPosition = addText("Date de mise en ligne", formData.date_mise_en_ligne || "", yPosition)

  yPosition = addSubsection("7.2 Budget", yPosition)
  yPosition = addText("Budget global", formData.budget_global || "", yPosition)
  yPosition = addText("Budget maintenance", formData.budget_maintenance || "", yPosition)

  // Section 8: Modalités de Réponse
  yPosition = addSection("8. MODALITÉS DE RÉPONSE À L'APPEL D'OFFRES", yPosition)

  yPosition = addSubsection("8.1 Critères de sélection", yPosition)
  yPosition = addText("Critères techniques", formData.criteres_techniques || "", yPosition)
  yPosition = addText("Critères financiers", formData.criteres_financiers || "", yPosition)

  yPosition = addSubsection("8.3 Calendrier de consultation", yPosition)
  yPosition = addText("Date limite de remise", formData.date_limite || "", yPosition)

  yPosition = addSubsection("8.4 Contact", yPosition)
  yPosition = addText("Personne à contacter", formData.contact_nom || "", yPosition)
  yPosition = addText("Email", formData.contact_email || "", yPosition)

  // Section 9: Annexes
  yPosition = addSection("9. ANNEXES", yPosition)

  yPosition = addSubsection("9.1 Documents fournis", yPosition)
  if (formData.documents_fournis) {
    yPosition = addCheckboxList(formData.documents_fournis, yPosition)
  }

  // Sauvegarde du PDF
  doc.save("cahier-des-charges.pdf")

  return true
}
