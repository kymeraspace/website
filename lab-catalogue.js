// Kymera Group — Laboratory & Testing Equipment catalogue
// Source: Kymera "Full List of machines and equipment for tanneries and shoe factories"
window.LAB_CATEGORIES = [
  { key: 'all',       label: 'All Equipment' },
  { key: 'flex',      label: 'Flexing & Fatigue' },
  { key: 'water',     label: 'Water & Vapour' },
  { key: 'abrasion',  label: 'Abrasion & Rub Fastness' },
  { key: 'thickness', label: 'Thickness & Stiffness' },
  { key: 'strength',  label: 'Strength & Dynamometers' },
  { key: 'footwear',  label: 'Footwear & Sole' },
  { key: 'thermal',   label: 'Thermal & Insulation' },
  { key: 'closure',   label: 'Closures & Fasteners' },
  { key: 'chemical',  label: 'Colour Fastness & Chemical' },
  { key: 'ppe',       label: 'Cut Resistance & PPE' }
];

window.LAB_INSTRUMENTS = [
  // Flexing & Fatigue
  { name: '"Belt" Flexing Tester', cat: 'flex', std: 'ISO 16177; SATRA TM133', purpose: 'Assess the flex resistance of belting and similar coated materials.' },
  { name: '"Ross" Flexometer', cat: 'flex', std: 'ISO 4643; ISO 5423; ASTM D1052; SATRA TM60', purpose: 'Determine the resistance of polymeric materials to cut growth during repeated flexing.' },
  { name: '"Ross" Flexometer in Cold Chamber', cat: 'flex', std: 'ISO 4643; ISO 5423; ASTM D1052; SATRA TM60', purpose: 'Cut-growth resistance of polymeric materials under repeated flexing at low temperature.' },
  { name: 'Whole Shoe Flexometer in Water', cat: 'flex', std: 'SATRA TM230; EN ISO 20344:5.15.2', purpose: 'Assess the resistance to water penetration of complete footwear during flexing.' },
  { name: 'Whole Shoe Flexometer, 4 Stations', cat: 'flex', std: 'SATRA TM92', purpose: 'Assess the resistance of a complete shoe to repeated flexing.' },
  { name: '"Vamp" Flexometer, 12 Stations, Cold Chamber', cat: 'flex', std: 'EN ISO 22288; EN ISO 5402-2; SATRA TM25', purpose: 'Determine the propensity of upper materials to crack at low temperature.' },
  { name: '"Vamp" Flexometer, 12 Stations', cat: 'flex', std: 'EN ISO 5402-2; ISO 4643; ISO 5423; SATRA TM25', purpose: 'Determine the propensity of upper materials to crack.' },
  { name: '"Bennewart" Flexometer', cat: 'flex', std: 'ISO 17707; EN ISO 20344:8.4; SATRA TM161', purpose: 'Determine the resistance of whole footwear soles to cut growth during repeated flexing.' },
  { name: '"Bennewart" Flexometer in Cold Chamber', cat: 'flex', std: 'ISO 17707; EN ISO 20344:8.4; SATRA TM161', purpose: 'Sole cut-growth resistance during repeated flexing at low temperature.' },
  { name: 'Rigidity Tester for Soles', cat: 'flex', std: 'ISO 17707; EN ISO 20344:8.4; SATRA TM161', purpose: 'Assess footwear rigidity to determine if it should be subjected to the Bennewart flexing test.' },
  { name: '"Bally" Flexometer, 20 Stations', cat: 'flex', std: 'EN ISO 17694; EN ISO 5402-1; SATRA TM55', purpose: 'Determine the wet or dry flex resistance of leather and finishes below 3.0 mm thickness.' },
  { name: '"Bally" Flexometer, 12 Stations', cat: 'flex', std: 'EN ISO 17694; EN ISO 5402-1; SATRA TM55', purpose: 'Wet or dry flex resistance of leather and applied finishes.' },
  { name: '"Bally" Flexometer, 12 Stations, Cold Chamber', cat: 'flex', std: 'EN ISO 17694; EN ISO 5402-1; SATRA TM55', purpose: 'Wet or dry flex resistance of leather and finishes at low temperature.' },
  { name: 'Fibreboard Flexometer', cat: 'flex', std: 'BS 5131-4.2; SATRA TM3; TM4', purpose: 'Assess the resistance of fibreboard material to repeated flexing.' },
  { name: 'Midsole Flexometer', cat: 'flex', std: 'EN ISO 20344:5.9; ISO 22568:3-4; CAN/CSA Z195', purpose: 'Assess the resistance of midsole materials to repeated flexing.' },
  { name: '"Mattia" Flexometer, 12 Stations', cat: 'flex', std: 'ISO 132; ISO 7854 Met. A; EN ISO 20344:6.5.2', purpose: 'Flex cracking of coated fabrics, rubber and thermoplastic materials.' },
  { name: 'Elastics Repeated Extension Tester', cat: 'flex', std: 'EN ISO 10768; SATRA TM103', purpose: 'Assess the resistance of elastics to repeated stretching to the limit of useful extension.' },

  // Water & Vapour Resistance
  { name: '"Maeser" Waterproofness Tester, 4 Stations', cat: 'water', std: 'ASTM D-2099; EN ISO 5403-2; SATRA TM34', purpose: 'Determine the resistance of a material to water penetration on flexing.' },
  { name: '"Bally" Penetrometer, 4 Stations', cat: 'water', std: 'EN ISO 5403-1; ISO 17702; SATRA TM171', purpose: 'Determine the dynamic water resistance of leather.' },
  { name: '"Bally" Penetrometer, 6 Stations', cat: 'water', std: 'EN ISO 5403-1; ISO 17702; SATRA TM171', purpose: 'Determine the dynamic water resistance of leather.' },
  { name: 'Stiffness Tester for Leathers', cat: 'water', std: 'EN ISO 5403-1; EN ISO 17702; SATRA TM171', purpose: 'Determine the stiffness of leathers as preparation to the Bally test.' },
  { name: 'Water Vapour Absorption Tester', cat: 'water', std: 'EN ISO 17229; EN 13515; SATRA TM172', purpose: 'Determine the coefficient of water vapour on leather and non-leather upper materials.' },
  { name: 'Water Vapour Absorption Tester for Gloves', cat: 'water', std: 'EN 420', purpose: 'Determine the coefficient of water vapour on leather and non-leather glove materials.' },
  { name: 'Water Vapour Permeability Tester, 6 Bottles', cat: 'water', std: 'EN ISO 20344:6.6; EN ISO 14268; SATRA TM172', purpose: 'Determine the breathability of leather and non-leather upper materials.' },
  { name: 'Water Vapour Permeability Tester, 12 Bottles', cat: 'water', std: 'EN ISO 20344:6.6; EN ISO 14268; SATRA TM172', purpose: 'Determine the breathability of leather and non-leather upper materials.' },
  { name: 'Dynamic Water-Resistance Tester', cat: 'water', std: 'EN ISO 20344:7.2; ISO 22649; EN ISO 5404', purpose: 'Determine the dynamic water-resistance of sole leather.' },
  { name: 'Leakproofness Tester', cat: 'water', std: 'EN ISO 20344:5.7; EN 374-2', purpose: 'Assess the leakproofness of whole footwear and gloves.' },

  // Abrasion & Rub Fastness
  { name: '"Taber" Abrasion Tester', cat: 'abrasion', std: 'ISO 17076-1; ISO 5470-1; ASTM D-3884', purpose: 'Assess the abrasive wear resistance of coated fabrics.' },
  { name: '"Martindale" Abrasion Machine, 4 Stations', cat: 'abrasion', std: 'ISO 12947-1; EN ISO 17704; EN ISO 5470-2', purpose: 'Resistance of uppers, linings and insocks to wet and dry abrasion.' },
  { name: '"Martindale" Abrasion Tester, 9 Stations', cat: 'abrasion', std: 'ISO 12947-1; EN ISO 17704; EN ISO 5470-2', purpose: 'Resistance of uppers, linings and insocks to wet and dry abrasion.' },
  { name: 'Wear and Corrosion Apparatus', cat: 'abrasion', std: 'EN 12472:2005+A1:2008', purpose: 'Accelerated wear and corrosion for the detection of nickel release.' },
  { name: 'Rotating Rub Fastness Tester', cat: 'abrasion', std: 'EN ISO 17700 Met. B; SATRA TM8; TM14', purpose: 'Assess marring and surface colour transfer during mild dry or wet abrasion.' },
  { name: 'Crockmeter, Hand Driven', cat: 'abrasion', std: 'ISO 20433; ISO 105-X12; SATRA TM167', purpose: 'Determine colour fastness to wet and dry rubbing.' },
  { name: 'Crockmeter, Motorized', cat: 'abrasion', std: 'ISO 20433; ISO 105-X12; SATRA TM167', purpose: 'Determine colour fastness to wet and dry rubbing.' },
  { name: '"Veslic" Rub Fastness Tester, 2 Stations', cat: 'abrasion', std: 'EN ISO 11640; SATRA TM173', purpose: 'Determine the behaviour of a leather surface on rubbing with a felt.' },
  { name: 'Ironing Element for "Veslic"', cat: 'abrasion', std: 'IUF 450', purpose: 'Assess the behaviour of a leather surface on rubbing with an ironing element.' },
  { name: 'Sole Abrasion Tester', cat: 'abrasion', std: 'EN 12770; ISO 4649; ISO 20871; ASTM D5963', purpose: 'Assess the abrasion resistance of polymeric materials used in soles.' },
  { name: 'Sole Abrasion Tester w/ Rotating Sample Holder', cat: 'abrasion', std: 'EN 12770; ISO 4649; ISO 20871; SATRA TM174', purpose: 'Abrasion resistance of sole polymeric materials with a rotating holder.' },
  { name: 'Lace to Lace Abrasion Tester, 6 Stations', cat: 'abrasion', std: 'EN ISO 22774; SATRA TM154', purpose: 'Abrasion resistance of a lace rubbing against a similar lace, eyelet or carrier.' },
  { name: 'Lace to Eyelet Abrasion Tester, 6 Stations', cat: 'abrasion', std: 'BS 5131:3.6; SATRA TM93', purpose: 'Abrasion resistance of a lace against a standard eyelet.' },
  { name: 'Leather Grain Crack Tester', cat: 'abrasion', std: 'ISO 3378; SATRA TM48', purpose: 'Determine the propensity of the grain leather to crack during bending.' },

  // Thickness & Stiffness
  { name: 'Thickness Measuring Gauge for Leather', cat: 'thickness', std: 'ISO 2589; ISO 23529:9.1', purpose: 'Determine the thickness of leather.' },
  { name: 'Thickness Measuring Gauge for Leather & Soles', cat: 'thickness', std: 'ISO 2589; ISO 2286-3; ISO 23529:9.1', purpose: 'Determine the thickness of leather and sole materials.' },
  { name: 'Thickness Measuring Gauge for Soles Material', cat: 'thickness', std: 'ISO 2286-3; ISO 23529:9.1', purpose: 'Determine the thickness of sole materials.' },
  { name: 'Thickness Measuring Gauge for Textile Material', cat: 'thickness', std: 'EN ISO 5084', purpose: 'Determine the thickness of textile materials.' },
  { name: 'Thickness Gauge for Modeling Clay Cylinders', cat: 'thickness', std: 'EN ISO 20344:5.4.1.4', purpose: 'Measure modeling clay cylinders before and after impact or compression tests.' },
  { name: 'Longitudinal / Torsional Stiffness — Shanks & Insole Back Parts', cat: 'thickness', std: 'EN 12959; ISO 18896; SATRA TM58; TM59; TM88', purpose: 'Assess longitudinal and torsional stiffness of shanks and insole back parts.' },
  { name: 'Longitudinal / Torsional Stiffness — Complete Footwear', cat: 'thickness', std: 'SATRA TM194; TM256', purpose: 'Assess longitudinal and torsional stiffness of complete footwear.' },

  // Strength & Dynamometers
  { name: 'Electronic Dynamometer, 5 kN', cat: 'strength', std: 'HED05', purpose: 'Universal tensile/compression testing with 5 kN capacity.' },
  { name: 'Electronic Dynamometer, 10 kN', cat: 'strength', std: 'HED10', purpose: 'Universal tensile/compression testing with 10 kN capacity.' },
  { name: 'Electronic Dynamometer, 20 kN', cat: 'strength', std: 'HED20', purpose: 'Universal tensile/compression testing with 20 kN capacity.' },
  { name: 'Extensometer for Dynamometers HED10 / HED20', cat: 'strength', std: 'HED-EXT', purpose: 'Measure elongation during dynamometer tensile testing.' },
  { name: 'Extra Load Cells (500 N – 20 kN)', cat: 'strength', std: 'HED-LC', purpose: 'Interchangeable load cells: 500 N, 1, 5, 10 and 20 kN; grips and devices on request.' },
  { name: 'Toe and Heel Adhesion Tester', cat: 'strength', std: 'SATRA TM404', purpose: 'Determine the resistance of the bond between upper and sole.' },
  { name: 'Electronic Lastometer', cat: 'strength', std: 'EN ISO 3379; EN ISO 17693; ISO 17695', purpose: 'Determine the lastability of uppers or complete upper assembly.' },
  { name: 'Modified Lastometer with Heating Source', cat: 'strength', std: 'ISO 17232', purpose: 'Determine the heat resistance of patent leathers.' },

  // Footwear & Sole Testing
  { name: 'Heel Fatigue Tester', cat: 'footwear', std: 'EN ISO 19956; SATRA TM21', purpose: 'Assess the ability of ladies\u2019 heels to withstand the repeated small impacts of normal walking.' },
  { name: 'Heel Impact Tester', cat: 'footwear', std: 'EN ISO 19953; SATRA TM20', purpose: 'Assess the resistance of ladies\u2019 heels to occasional heavy impacts during wear.' },
  { name: 'Toe Caps Impact Tester', cat: 'footwear', std: 'EN ISO 20344:5.4; EN ISO 22568; ASTM F2412', purpose: 'Assess the impact resistance of toe caps for safety and protective footwear.' },
  { name: 'Shock Absorption Tester', cat: 'footwear', std: 'SATRA TM142', purpose: 'Evaluate the shock absorption properties of footwear materials or assemblies.' },
  { name: 'Dynamic Compression Tester', cat: 'footwear', std: 'SATRA TM159', purpose: 'Evaluate dimensional changes after a prolonged period of dynamic compression.' },
  { name: 'Slip Resistance Tester', cat: 'footwear', std: 'EN ISO 13287; SATRA TM144; ASTM F2913', purpose: 'Determine the coefficient of friction between footwear outsoles and flooring.' },
  { name: 'Ice Slip Apparatus', cat: 'footwear', std: 'SATRA TM144', purpose: 'Perform the slip resistance test on an ice surface.' },
  { name: 'Metatarsal Device', cat: 'footwear', std: 'EN ISO 20344:5.16', purpose: 'Perform the metatarsal impact test.' },
  { name: 'Ankle Shock Absorption Tester', cat: 'footwear', std: 'EN ISO 20344:5.17', purpose: 'Assess shock absorption of ankle protective materials and assemblies.' },
  { name: 'Combustion Chamber', cat: 'footwear', std: 'ISO 3795; FMVSS 302', purpose: 'Determine the horizontal rate of flame spread of materials used in vehicle interiors.' },

  // Thermal & Insulation
  { name: 'Heat Insulation Tester', cat: 'thermal', std: 'EN ISO 20344:5.12; ISO 20877; EN 15090', purpose: 'Assess the heat insulating properties of the sole complex of protective footwear.' },
  { name: 'Cold Insulation Tester', cat: 'thermal', std: 'EN ISO 20344:5.13; ISO 20877', purpose: 'Assess the cold insulating properties of the sole complex of protective footwear.' },
  { name: 'Heat Resistance Tester', cat: 'thermal', std: 'EN ISO 20344:8.7', purpose: 'Assess the ability of finishes to withstand the heat of shoemaking operations.' },
  { name: 'Radiant Heat Tester', cat: 'thermal', std: 'EN ISO 6942', purpose: 'Assess the resistance of personal protective equipment against a radiant heat source.' },

  // Closures & Fasteners
  { name: 'Velcro Closing Tester', cat: 'closure', std: 'EN ISO 22776', purpose: 'Press the two parts of a touch-and-close fastener together before peel and shear tests.' },
  { name: 'Velcro Fatigue Tester', cat: 'closure', std: 'EN ISO 22776', purpose: 'Simulate use of touch-and-close fasteners by repeated closing and opening.' },
  { name: 'Zipper Fatigue Tester', cat: 'closure', std: 'EN 16732; SATRA TM50', purpose: 'Assess the resistance of slide fasteners to repeated opening and closing under load.' },

  // Colour Fastness & Chemical
  { name: 'Perspiration Tester', cat: 'chemical', std: 'ISO 11641; ISO 11642; ISO 105-E01; ISO 105-E04', purpose: 'Determine the resistance of leather colour to human sweat.' },
  { name: 'Laboratory Milling Machine', cat: 'chemical', std: 'ISO 4044', purpose: 'Mill materials to be used in chemical tests.' },
  { name: 'Laboratory Shaker, 8 Containers', cat: 'chemical', std: 'ISO 4045; ISO 4098; TM329', purpose: 'Agitate materials in chemical solutions.' },
  { name: 'Laboratory Press', cat: 'chemical', std: 'SATRA TM402', purpose: 'Press sample assemblies during the bonding process.' },
  { name: 'Laboratorial Reactivator', cat: 'chemical', std: '\u2014', purpose: 'Used in the specimen bonding process.' },

  // Cut Resistance & PPE
  { name: 'Chainsaw Cutting Tester', cat: 'ppe', std: 'ISO 11393-1; ISO 11393-3', purpose: 'Assess the resistance of personal protective devices to cutting by chainsaw.' },
  { name: 'Circular Blade Cutting Resistance Tester', cat: 'ppe', std: 'EN ISO 20344:6.14; EN 388:6.2', purpose: 'Assess the resistance of upper and glove materials to being cut by a blade.' },
  { name: 'Blade Cutting Resistance Tester', cat: 'ppe', std: 'EN 388:6.3; ISO 13997', purpose: 'Assess the resistance of textile and glove materials to being cut by a blade.' },
  { name: 'Electrical Conductivity Tester', cat: 'ppe', std: 'EN ISO 20344:5.10', purpose: 'Measure the electrical resistance of conductive footwear.' }
];
