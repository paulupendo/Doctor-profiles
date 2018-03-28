const specialties = [
  {
    key: 1,
    value: 'Allergy/Immunology: Clinical & Laboratory Immunology',
    text: 'Allergy/Immunology: Clinical & Laboratory Immunology',
  },
  { key: 2, value: 'Allergy & Immunology', text: 'Allergy & Immunology' },
  {
    key: 3,
    value: 'Anesthesiology: Addiction Medicine',
    text: 'Anesthesiology: Addiction Medicine',
  },
  {
    key: 4,
    value: 'Anesthesiology: Critical Care Medicine',
    text: 'Anesthesiology: Critical Care Medicine',
  },
  {
    key: 5,
    value: 'Anesthesiology: Hospice and Palliative Medicine',
    text: 'Anesthesiology: Hospice and Palliative Medicine',
  },
  {
    key: 6,
    value: 'Anesthesiology: Pain Medicine',
    text: 'Anesthesiology: Pain Medicine',
  },
  {
    key: 7,
    value: 'Anesthesiology: Pediatric Anesthesiology',
    text: 'Anesthesiology: Pediatric Anesthesiology',
  },
  { key: 8, value: 'Anesthesiology', text: 'Anesthesiology' },
  { key: 9, value: 'Clinical Pharmacology', text: 'Clinical Pharmacology' },
  { key: 10, value: 'Colon & Rectal Surgery', text: 'Colon & Rectal Surgery' },
  {
    key: 11,
    value: 'Dental: Dentist: Oral and Maxillofacial Surgery',
    text: 'Dental: Dentist: Oral and Maxillofacial Surgery',
  },
  {
    key: 12,
    value: 'Dermatology: Clinical & Laboratory Dermatological Immunology',
    text: 'Dermatology: Clinical & Laboratory Dermatological Immunology',
  },
  {
    key: 13,
    value: 'Dermatology: Dermatopathology',
    text: 'Dermatology: Dermatopathology',
  },
  {
    key: 14,
    value: 'Dermatology: MOHS-Micrographic Surgery',
    text: 'Dermatology: MOHS-Micrographic Surgery',
  },
  {
    key: 15,
    value: 'Dermatology: Pediatric Dermatology',
    text: 'Dermatology: Pediatric Dermatology',
  },
  {
    key: 16,
    value: 'Dermatology: Procedural Dermatology',
    text: 'Dermatology: Procedural Dermatology',
  },
  { key: 17, value: 'Dermatology', text: 'Dermatology' },
  {
    key: 18,
    value: 'Electrodiagnostic Medicine',
    text: 'Electrodiagnostic Medicine',
  },
  { key: 19, value: 'Emergency Medicine', text: 'Emergency Medicine' },
  {
    key: 20,
    value: 'Emergency Medicine: Emergency Medical Services',
    text: 'Emergency Medicine: Emergency Medical Services',
  },
  {
    key: 21,
    value: 'Emergency Medicine: Hospice and Palliative Medicine',
    text: 'Emergency Medicine: Hospice and Palliative Medicine',
  },
  {
    key: 22,
    value: 'Emergency Medicine: Medical Toxicology',
    text: 'Emergency Medicine: Medical Toxicology',
  },
  {
    key: 23,
    value: 'Emergency Medicine: Pediatric Emergency Medicine',
    text: 'Emergency Medicine: Pediatric Emergency Medicine',
  },
  {
    key: 24,
    value: 'Emergency Medicine: Sports Medicine',
    text: 'Emergency Medicine: Sports Medicine',
  },
  {
    key: 25,
    value: 'Emergency Medicine: Undersea and Hyperbaric Medicine',
    text: 'Emergency Medicine: Undersea and Hyperbaric Medicine',
  },
  {
    key: 26,
    value: 'Family Medicine: Addiction Medicine',
    text: 'Family Medicine: Addiction Medicine',
  },
  {
    key: 27,
    value: 'Family Medicine: Adolescent Medicine',
    text: 'Family Medicine: Adolescent Medicine',
  },
  {
    key: 28,
    value: 'Family Medicine: Adult Medicine',
    text: 'Family Medicine: Adult Medicine',
  },
  {
    key: 29,
    value: 'Family Medicine: Bariatric Medicine',
    text: 'Family Medicine: Bariatric Medicine',
  },
  {
    key: 30,
    value: 'Family Medicine: Geriatric Medicine',
    text: 'Family Medicine: Geriatric Medicine',
  },
  {
    key: 31,
    value: 'Family Medicine: Hospice and Palliative Medicine',
    text: 'Family Medicine: Hospice and Palliative Medicine',
  },
  {
    key: 32,
    value: 'Family Medicine: Sleep Medicine',
    text: 'Family Medicine: Sleep Medicine',
  },
  {
    key: 33,
    value: 'Family Medicine: Sports Medicine',
    text: 'Family Medicine: Sports Medicine',
  },
  { key: 34, value: 'Family Medicine', text: 'Family Medicine' },
  { key: 35, value: 'General Practice', text: 'General Practice' },
  { key: 36, value: 'Hospitalist', text: 'Hospitalist' },
  {
    key: 37,
    value: 'Independent Medical Examiner',
    text: 'Independent Medical Examiner',
  },
  {
    key: 38,
    value: 'Internal Medicine: Addiction Medicine',
    text: 'Internal Medicine: Addiction Medicine',
  },
  {
    key: 39,
    value: 'Internal Medicine: Adolescent Medicine',
    text: 'Internal Medicine: Adolescent Medicine',
  },
  {
    key: 40,
    value: 'Internal Medicine: Allergy & Immunology',
    text: 'Internal Medicine: Allergy & Immunology',
  },
  {
    key: 41,
    value: 'Internal Medicine: Bariatric Medicine',
    text: 'Internal Medicine: Bariatric Medicine',
  },
  {
    key: 42,
    value: 'Internal Medicine: Cardiovascular Disease',
    text: 'Internal Medicine: Cardiovascular Disease',
  },
  {
    key: 43,
    value: 'Internal Medicine: Clinical & Laboratory Immunology',
    text: 'Internal Medicine: Clinical & Laboratory Immunology',
  },
  {
    key: 44,
    value: 'Internal Medicine: Clinical Cardiac Electrophysiology',
    text: 'Internal Medicine: Clinical Cardiac Electrophysiology',
  },
  {
    key: 45,
    value: 'Internal Medicine: Critical Care Medicine',
    text: 'Internal Medicine: Critical Care Medicine',
  },
  {
    key: 46,
    value: 'Internal Medicine: Endocrinology, Diabetes & Metabolism',
    text: 'Internal Medicine: Endocrinology, Diabetes & Metabolism',
  },
  {
    key: 47,
    value: 'Internal Medicine: Gastroenterology',
    text: 'Internal Medicine: Gastroenterology',
  },
  {
    key: 48,
    value: 'Internal Medicine: Geriatric Medicine',
    text: 'Internal Medicine: Geriatric Medicine',
  },
  {
    key: 49,
    value: 'Internal Medicine: Hematology',
    text: 'Internal Medicine: Hematology',
  },
  {
    key: 50,
    value: 'Internal Medicine: Hematology & Oncology',
    text: 'Internal Medicine: Hematology & Oncology',
  },
  {
    key: 51,
    value: 'Internal Medicine: Hepatology',
    text: 'Internal Medicine: Hepatology',
  },
  {
    key: 52,
    value: 'Internal Medicine: Hospice and Palliative Medicine',
    text: 'Internal Medicine: Hospice and Palliative Medicine',
  },
  {
    key: 53,
    value: 'Internal Medicine: Hypertension Specialist',
    text: 'Internal Medicine: Hypertension Specialist',
  },
  {
    key: 54,
    value: 'Internal Medicine: Infectious Disease',
    text: 'Internal Medicine: Infectious Disease',
  },
  {
    key: 55,
    value: 'Internal Medicine: Interventional Cardiology',
    text: 'Internal Medicine: Interventional Cardiology',
  },
  {
    key: 56,
    value: 'Internal Medicine: Magnetic Resonance Imaging (MRI)',
    text: 'Internal Medicine: Magnetic Resonance Imaging (MRI)',
  },
  {
    key: 57,
    value: 'Internal Medicine: Medical Oncology',
    text: 'Internal Medicine: Medical Oncology',
  },
  {
    key: 58,
    value: 'Internal Medicine: Nephrology',
    text: 'Internal Medicine: Nephrology',
  },
  {
    key: 59,
    value: 'Internal Medicine: Pulmonary Disease',
    text: 'Internal Medicine: Pulmonary Disease',
  },
  {
    key: 60,
    value: 'Internal Medicine: Rheumatology',
    text: 'Internal Medicine: Rheumatology',
  },
  {
    key: 61,
    value: 'Internal Medicine: Sleep Medicine',
    text: 'Internal Medicine: Sleep Medicine',
  },
  {
    key: 62,
    value: 'Internal Medicine: Sports Medicine',
    text: 'Internal Medicine: Sports Medicine',
  },
  {
    key: 63,
    value: 'Internal Medicine: Transplant Hepatology',
    text: 'Internal Medicine: Transplant Hepatology',
  },
  { key: 64, value: 'Internal Medicine', text: 'Internal Medicine' },
  { key: 65, value: 'Legal Medicine', text: 'Legal Medicine' },
  {
    key: 66,
    value: 'Medical Genetics: Clinical Biochemical Genetics',
    text: 'Medical Genetics: Clinical Biochemical Genetics',
  },
  {
    key: 67,
    value: 'Medical Genetics: Clinical Cytogenetic',
    text: 'Medical Genetics: Clinical Cytogenetic',
  },
  {
    key: 68,
    value: 'Medical Genetics: Clinical Genetics (M.D.)',
    text: 'Medical Genetics: Clinical Genetics (M.D.)',
  },
  {
    key: 69,
    value: 'Medical Genetics: Clinical Molecular Genetics',
    text: 'Medical Genetics: Clinical Molecular Genetics',
  },
  {
    key: 70,
    value: 'Medical Genetics: Molecular Genetic Pathology',
    text: 'Medical Genetics: Molecular Genetic Pathology',
  },
  {
    key: 71,
    value: 'Medical Genetics: Ph.D. Medical Genetics',
    text: 'Medical Genetics: Ph.D. Medical Genetics',
  },
  { key: 72, value: 'Neurological Surgery', text: 'Neurological Surgery' },
  {
    key: 73,
    value: 'Neuromusculoskeletal Medicine & OMM',
    text: 'Neuromusculoskeletal Medicine & OMM',
  },
  {
    key: 74,
    value: 'Neuromusculoskeletal Medicine, Sports Medicine',
    text: 'Neuromusculoskeletal Medicine, Sports Medicine',
  },
  {
    key: 75,
    value: 'Nuclear Medicine: In Vivo & In Vitro Nuclear Medicine',
    text: 'Nuclear Medicine: In Vivo & In Vitro Nuclear Medicine',
  },
  {
    key: 76,
    value: 'Nuclear Medicine: Nuclear Cardiology',
    text: 'Nuclear Medicine: Nuclear Cardiology',
  },
  {
    key: 77,
    value: 'Nuclear Medicine: Nuclear Imaging & Therapy',
    text: 'Nuclear Medicine: Nuclear Imaging & Therapy',
  },
  { key: 78, value: 'Nuclear Medicine', text: 'Nuclear Medicine' },
  {
    key: 79,
    value: 'Obstetrics & Gynecology: Bariatric Medicine',
    text: 'Obstetrics & Gynecology: Bariatric Medicine',
  },
  {
    key: 80,
    value: 'Obstetrics & Gynecology: Critical Care Medicine',
    text: 'Obstetrics & Gynecology: Critical Care Medicine',
  },
  {
    key: 81,
    value:
      'Obstetrics & Gynecology: Female Pelvic Medicine & Reconstructive Surgery',
    text:
      'Obstetrics & Gynecology: Female Pelvic Medicine & Reconstructive Surgery',
  },
  {
    key: 82,
    value: 'Obstetrics & Gynecology: Gynecologic Oncology',
    text: 'Obstetrics & Gynecology: Gynecologic Oncology',
  },
  {
    key: 83,
    value: 'Obstetrics & Gynecology: Gynecology',
    text: 'Obstetrics & Gynecology: Gynecology',
  },
  {
    key: 84,
    value: 'Obstetrics & Gynecology: Hospice and Palliative Medicine',
    text: 'Obstetrics & Gynecology: Hospice and Palliative Medicine',
  },
  {
    key: 85,
    value: 'Obstetrics & Gynecology: Maternal & Fetal Medicine',
    text: 'Obstetrics & Gynecology: Maternal & Fetal Medicine',
  },
  {
    key: 86,
    value: 'Obstetrics & Gynecology: Obstetrics',
    text: 'Obstetrics & Gynecology: Obstetrics',
  },
  {
    key: 87,
    value: 'Obstetrics & Gynecology: Reproductive Endocrinology',
    text: 'Obstetrics & Gynecology: Reproductive Endocrinology',
  },
  {
    key: 88,
    value: 'Obstetrics & Gynecology',
    text: 'Obstetrics & Gynecology',
  },
  { key: 89, value: 'Ophthalmology', text: 'Ophthalmology' },
  {
    key: 90,
    value: 'Oral & Maxillofacial Surgery',
    text: 'Oral & Maxillofacial Surgery',
  },
  {
    key: 91,
    value: 'Orthopaedic Surgery: Adult Reconstructive Orthopaedic Surgery',
    text: 'Orthopaedic Surgery: Adult Reconstructive Orthopaedic Surgery',
  },
  { key: 92, value: 'Orthopaedic Surgery: Foot and Ankle Surgery', text:  'Orthopaedic Surgery: Foot and Ankle Surgery' },
  { key: 93, value: 'Orthopaedic Surgery: Hand Surgery', text:  'Orthopaedic Surgery: Hand Surgery' },
  { key: 94, value: 'Orthopaedic Surgery: Orthopaedic Surgery of the Spine', text: 'Orthopaedic Surgery: Orthopaedic Surgery of the Spine'  },
  { key: 95, value: 'Orthopaedic Surgery: Orthopaedic Trauma', text:  'Orthopaedic Surgery: Orthopaedic Trauma' },
  { key: 96, value: 'Orthopaedic Surgery: Pediatric Orthopaedic Surgery', text:  'Orthopaedic Surgery: Pediatric Orthopaedic Surgery' },
  { key: 97, value: 'Orthopaedic Surgery: Sports Medicine', text:  'Orthopaedic Surgery: Sports Medicine' },
  { key: 98, value: 'Orthopaedic Surgery', text: 'Orthopaedic Surgery' },
  { key: 99, value: 'Otolaryngology', text: 'Otolaryngology' },
  {
    key: 100,
    value: 'Otolaryngology: Facial Plastic Surgery',
    text: 'Otolaryngology: Facial Plastic Surgery',
  },
  {
    key: 101,
    value: 'Otolaryngology: Otolaryngic Allergy',
    text: 'Otolaryngology: Otolaryngic Allergy',
  },
  {
    key: 102,
    value: 'Otolaryngology: Otolaryngology/Facial Plastic Surgery',
    text: 'Otolaryngology: Otolaryngology/Facial Plastic Surgery',
  },
  {
    key: 103,
    value: 'Otolaryngology: Otology & Neurotology',
    text: 'Otolaryngology: Otology & Neurotology',
  },
  {
    key: 104,
    value: 'Otolaryngology: Pediatric Otolaryngology',
    text: 'Otolaryngology: Pediatric Otolaryngology',
  },
  {
    key: 105,
    value: 'Otolaryngology: Plastic Surgery within the Head & Neck',
    text: 'Otolaryngology: Plastic Surgery within the Head & Neck',
  },
  {
    key: 106,
    value: 'Otolaryngology: Sleep Medicine',
    text: 'Otolaryngology: Sleep Medicine',
  },
  {
    key: 107,
    value: 'Pain Medicine: Interventional Pain Medicine',
    text: 'Pain Medicine: Interventional Pain Medicine',
  },
  {
    key: 108,
    value: 'Pain Medicine: Pain Medicine',
    text: 'Pain Medicine: Pain Medicine',
  },
  {
    key: 109,
    value: 'Pathology: Anatomic Pathology',
    text: 'Pathology: Anatomic Pathology',
  },
  {
    key: 110,
    value: 'Pathology: Anatomic Pathology & Clinical Pathology',
    text: 'Pathology: Anatomic Pathology & Clinical Pathology',
  },
  {
    key: 111,
    value: 'Pathology: Blood Banking & Transfusion Medicine',
    text: 'Pathology: Blood Banking & Transfusion Medicine',
  },
  {
    key: 112,
    value: 'Pathology: Chemical Pathology',
    text: 'Pathology: Chemical Pathology',
  },
  {
    key: 113,
    value: 'Pathology: Clinical Informatics',
    text: 'Pathology: Clinical Informatics',
  },
  {
    key: 114,
    value: 'Pathology: Clinical Pathology',
    text: 'Pathology: Clinical Pathology',
  },
  { key: 115, value: 'Pathology: Clinical Pathology/Laboratory Medicine' },
  {
    key: 116,
    value: 'Pathology: Cytopathology',
    text: 'Pathology: Cytopathology',
  },
  {
    key: 117,
    value: 'Pathology: Dermatopathology',
    text: 'Pathology: Dermatopathology',
  },
  {
    key: 118,
    value: 'Pathology: Forensic Pathology',
    text: 'Pathology: Forensic Pathology',
  },
  { key: 119, value: 'Pathology: Hematology', text: 'Pathology: Hematology' },
  {
    key: 120,
    value: 'Pathology: Immunopathology',
    text: 'Pathology: Immunopathology',
  },
  {
    key: 121,
    value: 'Pathology: Medical Microbiology',
    text: 'Pathology: Medical Microbiology',
  },
  {
    key: 122,
    value: 'Pathology: Molec Gen Pathology',
    text: 'Pathology: Molec Gen Pathology',
  },
  {
    key: 123,
    value: 'Pathology: Neuropathology',
    text: 'Pathology: Neuropathology',
  },
  {
    key: 124,
    value: 'Pathology: Pediatric Pathology',
    text: 'Pathology: Pediatric Pathology',
  },
  { key: 125, value: 'Pediatrics', text: 'Pediatrics' },
  {
    key: 126,
    value: 'Pediatrics: Adolescent Medicine',
    text: 'Pediatrics: Adolescent Medicine',
  },
  {
    key: 127,
    value: 'Pediatrics: Child Abuse',
    text: 'Pediatrics: Child Abuse',
  },
  {
    key: 128,
    value: 'Pediatrics: Clinical & Laboratory Immunology',
    text: 'Pediatrics: Clinical & Laboratory Immunology',
  },
  {
    key: 129,
    value: 'Pediatrics: Developmental - Behavioral Pediatrics',
    text: 'Pediatrics: Developmental - Behavioral Pediatrics',
  },
  {
    key: 130,
    value: 'Pediatrics: Hospice and Palliative Medicine',
    text: 'Pediatrics: Hospice and Palliative Medicine',
  },
  {
    key: 131,
    value: 'Pediatrics: Medical Toxicology',
    text: 'Pediatrics: Medical Toxicology',
  },
  {
    key: 132,
    value: 'Pediatrics: Neonatal-Perinatal Medicine',
    text: 'Pediatrics: Neonatal-Perinatal Medicine',
  },
  {
    key: 133,
    value: 'Pediatrics: Neurodevelopmental Disabilities',
    text: 'Pediatrics: Neurodevelopmental Disabilities',
  },
  {
    key: 134,
    value: 'Pediatrics: Pediatric Allergy & Immunology',
    text: 'Pediatrics: Pediatric Allergy & Immunology',
  },
  {
    key: 135,
    value: 'Pediatrics: Pediatric Cardiology',
    text: 'Pediatrics: Pediatric Cardiology',
  },
  {
    key: 136,
    value: 'Pediatrics: Pediatric Critical Care Medicine',
    text: 'Pediatrics: Pediatric Critical Care Medicine',
  },
  {
    key: 137,
    value: 'Pediatrics: Pediatric Emergency Medicine',
    text: 'Pediatrics: Pediatric Emergency Medicine',
  },
  {
    key: 138,
    value: 'Pediatrics: Pediatric Endocrinology',
    text: 'Pediatrics: Pediatric Endocrinology',
  },
  {
    key: 139,
    value: 'Pediatrics: Pediatric Gastroenterology',
    text: 'Pediatrics: Pediatric Gastroenterology',
  },
  {
    key: 140,
    value: 'Pediatrics: Pediatric Hematology-Oncology',
    text: 'Pediatrics: Pediatric Hematology-Oncology',
  },
  {
    key: 141,
    value: 'Pediatrics: Pediatric Infectious Diseases',
    text: 'Pediatrics: Pediatric Infectious Diseases',
  },
  {
    key: 142,
    value: 'Pediatrics: Pediatric Nephrology',
    text: 'Pediatrics: Pediatric Nephrology',
  },
  {
    key: 143,
    value: 'Pediatrics: Pediatric Pulmonology',
    text: 'Pediatrics: Pediatric Pulmonology',
  },
  {
    key: 144,
    value: 'Pediatrics: Pediatric Rheumatology',
    text: 'Pediatrics: Pediatric Rheumatology',
  },
  {
    key: 145,
    value: 'Pediatrics: Pediatric Transplant Hepatology',
    text: 'Pediatrics: Pediatric Transplant Hepatology',
  },
  {
    key: 146,
    value: 'Pediatrics: Sleep Medicine',
    text: 'Pediatrics: Sleep Medicine',
  },
  {
    key: 147,
    value: 'Pediatrics: Sports Medicine',
    text: 'Pediatrics: Sports Medicine',
  },
  { key: 148, value: 'Phlebology', text: 'Phlebology' },
  {
    key: 149,
    value:
      'Physical Medicine & Rehabilitation: Hospice and Palliative Medicine',
    text: 'Physical Medicine & Rehabilitation: Hospice and Palliative Medicine',
  },
  {
    key: 150,
    value: 'Physical Medicine & Rehabilitation: Neuromuscular Medicine',
    text: 'Physical Medicine & Rehabilitation: Neuromuscular Medicine',
  },
  {
    key: 151,
    value: 'Physical Medicine & Rehabilitation: Pain Medicine',
    text: 'Physical Medicine & Rehabilitation: Pain Medicine',
  },
  {
    key: 152,
    value:
      'Physical Medicine & Rehabilitation: Pediatric Rehabilitation Medicine',
    text:
      'Physical Medicine & Rehabilitation: Pediatric Rehabilitation Medicine',
  },
  {
    key: 153,
    value: 'Physical Medicine & Rehabilitation: Spinal Cord Injury Medicine',
    text: 'Physical Medicine & Rehabilitation: Spinal Cord Injury Medicine',
  },
  {
    key: 154,
    value: 'Physical Medicine & Rehabilitation: Sports Medicine',
    text: 'Physical Medicine & Rehabilitation: Sports Medicine',
  },
  {
    key: 155,
    value: 'Physical Medicine & Rehabilitation',
    text: 'Physical Medicine & Rehabilitation',
  },
  { key: 156, value: 'Plastic Surgery', text: 'Plastic Surgery' },
  {
    key: 157,
    value: 'Plastic Surgery: Plastic Surgery Within the Head and Neck',
    text: 'Plastic Surgery: Plastic Surgery Within the Head and Neck',
  },
  {
    key: 158,
    value: 'Plastic Surgery: Surgery of the Hand',
    text: 'Plastic Surgery: Surgery of the Hand',
  },
  { key: 159, value: 'Podiatric: Podiatrist', text: 'Podiatric: Podiatrist' },
  {
    key: 160,
    value: 'Podiatric: Podiatrst: Foot & Ankle Surgery',
    text: 'Podiatric: Podiatrst: Foot & Ankle Surgery',
  },
  {
    key: 161,
    value: 'Podiatric: Podiatrst: Foot Surgery',
    text: 'Podiatric: Podiatrst: Foot Surgery',
  },
  {
    key: 162,
    value: 'Podiatric: Podiatrst: General Practice',
    text: 'Podiatric: Podiatrst: General Practice',
  },
  {
    key: 163,
    value: 'Podiatric: Podiatrst: Primary Podiatric Medicine',
    text: 'Podiatric: Podiatrst: Primary Podiatric Medicine',
  },
  {
    key: 164,
    value: 'Podiatric: Podiatrst: Public Medicine',
    text: 'Podiatric: Podiatrst: Public Medicine',
  },
  {
    key: 165,
    value: 'Podiatric: Podiatrst: Radiology',
    text: 'Podiatric: Podiatrst: Radiology',
  },
  {
    key: 166,
    value: 'Podiatric: Podiatrst: Sports Medicine',
    text: 'Podiatric: Podiatrst: Sports Medicine',
  },
  {
    key: 167,
    value: 'Preventive Medicine: Aerospace Medicine',
    text: 'Preventive Medicine: Aerospace Medicine',
  },
  {
    key: 168,
    value: 'Preventive Medicine: Clinical Informatics',
    text: 'Preventive Medicine: Clinical Informatics',
  },
  {
    key: 169,
    value: 'Preventive Medicine: Medical Toxicology',
    text: 'Preventive Medicine: Medical Toxicology',
  },
  {
    key: 170,
    value: 'Preventive Medicine: Occupational Medicine',
    text: 'Preventive Medicine: Occupational Medicine',
  },
  {
    key: 171,
    value:
      'Preventive Medicine: Preventive Medicine/Occupational Environmental Medicine',
    text:
      'Preventive Medicine: Preventive Medicine/Occupational Environmental Medicine',
  },
  {
    key: 172,
    value: 'Preventive Medicine: Public Health & General Preventive Medicine',
    text: 'Preventive Medicine: Public Health & General Preventive Medicine',
  },
  {
    key: 173,
    value: 'Preventive Medicine: Sports Medicine',
    text: 'Preventive Medicine: Sports Medicine',
  },
  {
    key: 174,
    value: 'Preventive Medicine: Undersea and Hyperbaric Medicine',
    text: 'Preventive Medicine: Undersea and Hyperbaric Medicine',
  },
  {
    key: 175,
    value: 'Psychiatry/Nerology: Behavioral Neurology & Neuropsychiatry',
    text: 'Psychiatry/Nerology: Behavioral Neurology & Neuropsychiatry',
  },
  {
    key: 176,
    value: 'Psychiatry/Nerology: Addiction Medicine',
    text: 'Psychiatry/Nerology: Addiction Medicine',
  },
  {
    key: 177,
    value: 'Psychiatry/Nerology: Addiction Psychiatry',
    text: 'Psychiatry/Nerology: Addiction Psychiatry',
  },
  {
    key: 178,
    value: 'Psychiatry/Nerology: Bariatric Medicine',
    text: 'Psychiatry/Nerology: Bariatric Medicine',
  },
  {
    key: 179,
    value: 'Psychiatry/Nerology: Child & Adolescent Psychiatry',
    text: 'Psychiatry/Nerology: Child & Adolescent Psychiatry',
  },
  {
    key: 180,
    value: 'Psychiatry/Nerology: Clinical Neurophysiology',
    text: 'Psychiatry/Nerology: Clinical Neurophysiology',
  },
  {
    key: 181,
    value: 'Psychiatry/Nerology: Diagnostic Neuroimaging',
    text: 'Psychiatry/Nerology: Diagnostic Neuroimaging',
  },
  {
    key: 182,
    value: 'Psychiatry/Nerology: Forensic Psychiatry',
    text: 'Psychiatry/Nerology: Forensic Psychiatry',
  },
  {
    key: 183,
    value: 'Psychiatry/Nerology: Geriatric Psychiatry',
    text: 'Psychiatry/Nerology: Geriatric Psychiatry',
  },
  {
    key: 184,
    value: 'Psychiatry/Nerology: Hospice and Palliative Medicine',
    text: 'Psychiatry/Nerology: Hospice and Palliative Medicine',
  },
  {
    key: 185,
    value: 'Psychiatry/Nerology: Neurodevelopmental Disabilities',
    text: 'Psychiatry/Nerology: Neurodevelopmental Disabilities',
  },
  { key: 186, value: 'Psychiatry/Nerology: Neurology' },
  {
    key: 187,
    value:
      'Psychiatry/Nerology: Neurology with Special Qualifications in Child Neurology',
    text:
      'Psychiatry/Nerology: Neurology with Special Qualifications in Child Neurology',
  },
  {
    key: 188,
    value: 'Psychiatry/Nerology: Neuromuscular Medicine',
    text: 'Psychiatry/Nerology: Neuromuscular Medicine',
  },
  {
    key: 189,
    value: 'Psychiatry/Nerology: Pain Medicine',
    text: 'Psychiatry/Nerology: Pain Medicine',
  },
  {
    key: 190,
    value: 'Psychiatry/Nerology: Psychiatry',
    text: 'Psychiatry/Nerology: Psychiatry',
  },
  {
    key: 191,
    value: 'Psychiatry/Nerology: Psychosomatic Medicine',
    text: 'Psychiatry/Nerology: Psychosomatic Medicine',
  },
  {
    key: 192,
    value: 'Psychiatry/Nerology: Sleep Medicine',
    text: 'Psychiatry/Nerology: Sleep Medicine',
  },
  {
    key: 193,
    value: 'Psychiatry/Nerology: Sports Medicine',
    text: 'Psychiatry/Nerology: Sports Medicine',
  },
  {
    key: 194,
    value: 'Psychiatry/Nerology: Vascular Neurology',
    text: 'Psychiatry/Nerology: Vascular Neurology',
  },
  {
    key: 195,
    value: 'Radiology: Body Imaging',
    text: 'Radiology: Body Imaging',
  },
  {
    key: 196,
    value: 'Radiology: Diagnostic Neuroimaging',
    text: 'Radiology: Diagnostic Neuroimaging',
  },
  {
    key: 197,
    value: 'Radiology: Diagnostic Radiology',
    text: 'Radiology: Diagnostic Radiology',
  },
  {
    key: 198,
    value: 'Radiology: Diagnostic Ultrasound',
    text: 'Radiology: Diagnostic Ultrasound',
  },
  {
    key: 199,
    value: 'Radiology: Hospice and Palliative Medicine',
    text: 'Radiology: Hospice and Palliative Medicine',
  },
  {
    key: 200,
    value: 'Radiology: Neuroradiology',
    text: 'Radiology: Neuroradiology',
  },
  {
    key: 201,
    value: 'Radiology: Nuclear Radiology',
    text: 'Radiology: Nuclear Radiology',
  },
  {
    key: 202,
    value: 'Radiology: Pediatric Radiology',
    text: 'Radiology: Pediatric Radiology',
  },
  {
    key: 203,
    value: 'Radiology: Radiation Oncology',
    text: 'Radiology: Radiation Oncology',
  },
  {
    key: 204,
    value: 'Radiology: Radiological Physics',
    text: 'Radiology: Radiological Physics',
  },
  {
    key: 205,
    value: 'Radiology: Therapeutic Radiology',
    text: 'Radiology: Therapeutic Radiology',
  },
  {
    key: 206,
    value: 'Radiology: Vascular & Interventional Radiology',
    text: 'Radiology: Vascular & Interventional Radiology',
  },
  {
    key: 207,
    value: 'Surgery: Hospice and Palliative Medicine',
    text: 'Surgery: Hospice and Palliative Medicine',
  },
  {
    key: 208,
    value: 'Surgery: Pediatric Surgery',
    text: 'Surgery: Pediatric Surgery',
  },
  {
    key: 209,
    value: 'Surgery: Plastic and Reconstructive Surgery',
    text: 'Surgery: Plastic and Reconstructive Surgery',
  },
  {
    key: 210,
    value: 'Surgery: Surgery of the Hand',
    text: 'Surgery: Surgery of the Hand',
  },
  {
    key: 211,
    value: 'Surgery: Surgical Critical Care',
    text: 'Surgery: Surgical Critical Care',
  },
  {
    key: 212,
    value: 'Surgery: Surgical Oncology',
    text: 'Surgery: Surgical Oncology',
  },
  {
    key: 213,
    value: 'Surgery: Trauma Surgery',
    text: 'Surgery: Trauma Surgery',
  },
  {
    key: 214,
    value: 'Surgery: Vascular Surgery',
    text: 'Surgery: Vascular Surgery',
  },
  { key: 215, value: 'Surgery', text: 'Surgery' },
  {
    key: 216,
    value: 'Thoracic Surgery (Cardiothoracic Vascular Surgery)',
    text: 'Thoracic Surgery (Cardiothoracic Vascular Surgery)',
  },
  { key: 217, value: 'Transplant Surgery', text: 'Transplant Surgery' },
  {
    key: 218,
    value: 'Urology: Pediatric Urology',
    text: 'Urology: Pediatric Urology',
  },
  { key: 219, value: 'Urology', text: 'Urology' },
  {
    key: 220,
    value: 'Urology: Female Pelvic Medicine and Reconstructive Surgery',
    text: 'Urology: Female Pelvic Medicine and Reconstructive Surgery',
  },
];

export default specialties;
