export interface TechnicalSpec {
  label: string;
  value: string;
}

export interface Application {
  title: string;
  desc: string;
}

export interface RelatedProduct {
  id: number;
  name: string;
  category: string;
  tag: string;
  slug: string;
}

export interface ProductData {
  id: string;
  slug: string;
  tag: string;
  title: string;
  heading: string;
  description: string;
  orderSizeLabel: string;
  orderSizeOption: string;
  logistics: string;
  accentColor: string;
  specs: TechnicalSpec[];
  applications: Application[];
}

export const productsData: Record<string, ProductData> = {
  "silver-nanowires": {
    id: "snw-01",
    slug: "silver-nanowires",
    tag: "Nanomaterials",
    title: "SILVER NANOWIRES | ADVANCED NANOMATERIALS",
    heading: "High-Purity Silver Nanowires (Ag NWs)",
    description: "High aspect ratio silver nanowires ideal for transparent conductive films and flexible electronics. Diameter: ~300 nm, Length: ~20 µm, Purity: >99.9%. These high aspect ratio conductive nanomaterials are widely used in flexible displays, touch screens, smart windows, and wearable electronics. They form percolative conductive networks at low loading, enabling high transparency with low sheet resistance, acting as a strong alternative to indium tin oxide (ITO).",
    orderSizeLabel: "Order Size",
    orderSizeOption: "Flexible (mg to kg)",
    logistics: "Lead Time: 2-3 Days. Download TDS and MSDS available upon inquiry.",
    accentColor: "#FFB800",
    specs: [
      { label: "Diameter", value: "~300 nm" },
      { label: "Length", value: "~20 µm" },
      { label: "Aspect Ratio", value: "High (>50)" },
      { label: "Purity", value: ">99.9%" }
    ],
    applications: [
      { 
        title: "Flexible Displays", 
        desc: "Used in bendable and foldable display technologies requiring transparent conductive layers." 
      },
      { 
        title: "Touch Screens", 
        desc: "Provides transparent conductive networks for capacitive touch sensing." 
      },
      { 
        title: "Smart Windows", 
        desc: "Enables conductive coatings for electrochromic and energy-efficient windows." 
      },
      { 
        title: "Wearable Electronics", 
        desc: "Used in flexible and stretchable electronic devices." 
      }
    ]
  },
  "silver-nanoparticles": {
    id: "snp-01",
    slug: "silver-nanoparticles",
    tag: "Nanomaterials",
    title: "SILVER NANOPARTICLES | FUNCTIONAL NANOMATERIALS",
    heading: "High-Purity Silver Nanoparticles",
    description: "Silver nanoparticles are widely used due to their unique optical, electrical, and antimicrobial properties. These nanoparticles offer high surface area and excellent reactivity, making them suitable for applications in catalysis, biomedical coatings, and conductive inks. They can be synthesized with controlled particle sizes and surface chemistry, allowing customization for specific industrial and research needs. Their strong antibacterial properties also make them ideal for coatings and healthcare applications.",
    orderSizeLabel: "Order Size",
    orderSizeOption: "Flexible (mg to kg)",
    logistics: "Lead Time: 2-3 Days. TDS and MSDS documentation available.",
    accentColor: "#FFB800",
    specs: [
      { label: "Diameter", value: "Ranging from 50 to 500 nm" },
      { label: "Purity", value: ">99.9%" }
    ],
    applications: [
      { title: "Conductive Inks", desc: "Used in printed electronics for creating conductive tracks and circuits." },
      { title: "Antimicrobial Coatings", desc: "Provides strong antibacterial properties for medical and surface coatings." },
      { title: "Sensors", desc: "Enhances sensitivity in chemical and biological sensing applications." },
      { title: "Catalysis", desc: "Acts as an active catalyst in chemical and environmental reactions." }
    ]
  },
  "copper-nanoparticles": {
    id: "cnp-01",
    slug: "copper-nanoparticles",
    tag: "Nanomaterials",
    title: "COPPER NANOPARTICLES | FUNCTIONAL NANOMATERIALS",
    heading: "Cost-Effective, Highly Conductive Copper Nanoparticles",
    description: "Copper nanomaterials provide a cost-effective alternative to noble metal nanomaterials for conductive and catalytic applications. With high electrical conductivity and good processability, they are widely used in printed electronics and energy-related applications. These materials can be tailored in terms of size, morphology, and surface treatment to improve oxidation resistance and stability. They are suitable for large-scale applications where cost and performance balance is critical.",
    orderSizeLabel: "Order Size",
    orderSizeOption: "Flexible (mg to kg)",
    logistics: "Lead Time: 2-3 Days. TDS and MSDS documentation available.",
    accentColor: "#FFB800",
    specs: [
      { label: "Diameter", value: "Ranging from 50 to 500 nm" },
      { label: "Purity", value: ">99.9%" }
    ],
    applications: [
      { title: "Printed Electronics", desc: "Used in low-cost conductive inks for electronic circuit fabrication." },
      { title: "Thermal Management", desc: "Enhances heat dissipation in electronic and energy systems." },
      { title: "Catalysts", desc: "Used in chemical reactions due to high surface reactivity." },
      { title: "Conductive Pastes", desc: "Formulates cost-effective conductive materials for industrial use." }
    ]
  },
  "copper-oxide-nanoparticles": {
    id: "con-01",
    slug: "copper-oxide-nanoparticles",
    tag: "Nanomaterials",
    title: "COPPER OXIDE NANOPARTICLES | FUNCTIONAL NANOMATERIALS",
    heading: "Precision-Synthesized Copper Oxide Nanoparticles",
    description: "Copper oxide (CuO) nanoparticles are semiconductor materials with excellent catalytic and sensing properties. They are widely used in gas sensors, energy storage devices, and antimicrobial coatings. Due to their narrow bandgap and high surface reactivity, CuO nanoparticles are effective in catalytic reactions and environmental applications. Their properties can be tuned through synthesis methods, making them suitable for both research and industrial applications.",
    orderSizeLabel: "Order Size",
    orderSizeOption: "Flexible (mg to kg)",
    logistics: "Lead Time: 2-3 Days. TDS and MSDS documentation available.",
    accentColor: "#FFB800",
    specs: [
      { label: "Diameter", value: "Ranging from 50 to 500 nm" },
      { label: "Purity", value: ">99.9%" }
    ],
    applications: [
      { title: "Gas Sensors", desc: "Enhances sensitivity in gas detection and environmental monitoring systems." },
      { title: "Photocatalysis", desc: "Enables degradation of pollutants under light irradiation." },
      { title: "Energy Storage", desc: "Used in batteries and supercapacitors for improved performance." },
      { title: "Antimicrobial Agents", desc: "Provides antibacterial activity for coatings and healthcare applications." }
    ]
  },
  "silver-based-electrically-conductive-inks": {
    id: "ci-01",
    slug: "silver-based-electrically-conductive-inks",
    tag: "Nanomaterials",
    title: "SILVER BASED ELECTRICALLY CONDUCTIVE INKS | FUNCTIONAL NANOMATERIALS",
    heading: "Customizable, High-Performance Conductive Inks",
    description: "Conductive inks are essential materials for printed electronics, enabling the fabrication of circuits on flexible and rigid substrates. These inks are formulated using metallic nanomaterials such as silver or copper to achieve high conductivity and printability. They are compatible with various printing techniques including screen printing, inkjet printing, and aerosol deposition. Conductive inks are widely used in applications such as sensors, RFID, flexible circuits, and wearable electronics.",
    orderSizeLabel: "Order Size",
    orderSizeOption: "Flexible (mg to kg)",
    logistics: "Lead Time: 2-3 Days. TDS and MSDS documentation available.",
    accentColor: "#FFB800",
    specs: [
      { label: "Viscosity", value: "Ranging from 1000 to 5000 cPs" },
      { label: "Solid Content", value: "40+ % based on the requirement" },
      { label: "Resistance", value: "0.1 mΩ" }
    ],
    applications: [
      { title: "RFID/NFC Tags", desc: "Printed conductive patterns for wireless communication devices." },
      { title: "Printed Circuit Boards", desc: "Used for creating conductive tracks in electronic circuits." },
      { title: "Flexible Sensors", desc: "Enables stretchable and flexible sensing devices." },
      { title: "Membrane Switches", desc: "Used in thin, flexible switch interfaces." }
    ]
  },
  "screen-printed-electrodes": {
    id: "spe-01",
    slug: "screen-printed-electrodes",
    tag: "Flexible Electronics",
    title: "SCREEN PRINTED ELECTRODES | SENSING",
    heading: "Standard & Custom Printed Electrodes",
    description: "Reliable and mass-producible electrochemical platforms for biosensing. Available on PET or Ceramic substrates with optional working electrode modifications (Ag, Carbon, Au, Pt) to suit specific detection protocols.",
    orderSizeLabel: "Sheet Count",
    orderSizeOption: "Batch (100 to 10,000 units)",
    logistics: "Lead Time: 2 Weeks. Batch-to-batch consistency guaranteed.",
    accentColor: "#FFB800",
    specs: [
      { label: "Substrate", value: "PET / PI / Ceramic" },
      { label: "WE Material", value: "Carbon / Au / Pt" },
      { label: "Resolution", value: "<100 µm" },
      { label: "Reproducibility", value: "CV < 5%" }
    ],
    applications: [
      { title: "Biosensors", desc: "Glucose, lactate, and DNA detection." },
      { title: "Environmental", desc: "Heavy metal sensing in water." },
      { title: "Point-of-Care", desc: "Disposable diagnostic strips." },
      { title: "Electrochemical", desc: "R&D for novel redox systems." }
    ]
  },
  "screen-printed-sensors": {
    id: "sps-01",
    slug: "screen-printed-sensors",
    tag: "Flexible Electronics",
    title: "CUSTOM PRINTED SENSORS | WEARABLES",
    heading: "Tailored Flexible Sensor Solutions",
    description: "End-to-end design and fabrication of flexible sensors for physical and chemical stimuli. We integrate proprietary nanomaterial active layers to achieve industry-leading sensitivity and response times in a flexible form factor.",
    orderSizeLabel: "Project Scope",
    orderSizeOption: "R&D Prototype to Scale",
    logistics: "Lead Time: Custom. Design consultation included.",
    accentColor: "#FFB800",
    specs: [
      { label: "Sensitivity", value: "Custom" },
      { label: "Flex Life", value: ">5,000 cycles" },
      { label: "Operating V", value: "<3.3V" },
      { label: "Interfacing", value: "ZIF / Solder" }
    ],
    applications: [
      { title: "Health Monitors", desc: "Continuous sweat and pulse monitoring." },
      { title: "Automation", desc: "Flexible pressure mats for cobots." },
      { title: "Smart Packaging", desc: "Temperature and shelf-life sensors." },
      { title: "Activity", desc: "Gait analysis for athletic training." }
    ]
  },
  "screen-printed-patterns": {
    id: "spp-01",
    slug: "screen-printed-patterns",
    tag: "Flexible Electronics",
    title: "PRINTED PATTERNS | CIRCUITRY",
    heading: "Conductive Circuit Patterns on Film",
    description: "Precision-printed conductive patterns for advanced electronic integration. We specialize in high-resolution lines and gaps for complex multi-layer designs on heat-sensitive substrates like thin polymer films.",
    orderSizeLabel: "Pattern Complexity",
    orderSizeOption: "Custom Layout",
    logistics: "Lead Time: 10-14 Days. Patterning up to A3 size.",
    accentColor: "#FFB800",
    specs: [
      { label: "Max Size", value: "300 x 400 mm" },
      { label: "Min Line", value: "80 µm" },
      { label: "Layers", value: "Single / Double" },
      { label: "Insulation", value: "UV Curable Mask" }
    ],
    applications: [
      { title: "Flexible Circuits", desc: "Foldable interconnects for mobile devices." },
      { title: "Antennas", desc: "Integrated NFC and RFID coils." },
      { title: "Heaters", desc: "Transparent heaters for optics." },
      { title: "Touch Interfaces", desc: "Printed capacitive button arrays." }
    ]
  }
};

export const relatedProductsData: RelatedProduct[] = [
  { id: 1, name: "Silver Nanowires", category: "Nanomaterials", tag: "Conductive", slug: "silver-nanowires" },
  { id: 2, name: "Silver Nanoparticles", category: "Nanomaterials", tag: "Functional", slug: "silver-nanoparticles" },
  { id: 3, name: "Copper Nanoparticles", category: "Nanomaterials", tag: "Conductive", slug: "copper-nanoparticles" },
  { id: 4, name: "Conductive Inks", category: "Nanomaterials", tag: "Silver-Based", slug: "silver-based-electrically-conductive-inks" },
  { id: 5, name: "Printed Electrodes", category: "Flexible Electronics", tag: "Sensors", slug: "screen-printed-electrodes" }
];
