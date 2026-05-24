import type{ IngredientSpotlight } from '../types';

export const INGREDIENTS: IngredientSpotlight[] = [
  {
    id: 'turmeric',
    name: 'Turmeric',
    tagline: 'The golden root that heals, colors, and transforms everything it touches.',
    story: 'Turmeric has been used for over 4000 years in South Asian cooking and Ayurvedic medicine. Its active compound curcumin is one of the most studied anti-inflammatory substances on earth. In cooking it adds an earthy warmth and a luminous golden color that no other spice can replicate.',
    howToStore: 'Fresh turmeric keeps in the fridge for 2 weeks or frozen for 6 months. Ground turmeric keeps in an airtight container away from light for up to 3 years.',
    howToPrep: 'Wear gloves — turmeric stains everything permanently. Peel fresh turmeric with a spoon edge and grate or slice thin. Always pair with black pepper which increases absorption by 2000%.',
    substitute: 'Saffron for color, ginger for warmth, or a mix of cumin and paprika for flavor.',
    image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?q=80&w=1000&auto=format&fit=crop',
    category: 'spices',
    color: '#F59E0B'
  },
  {
    id: 'mint',
    name: 'Fresh Mint',
    tagline: 'Cool, bright, and wildly versatile — mint belongs in your savory dishes too.',
    story: 'Mint is one of the oldest cultivated herbs on earth, found in Egyptian tombs dating back 3000 years. Most people think of it as a garnish but in Moroccan, Vietnamese, and Middle Eastern cooking it is a primary flavor — used in salads, stews, drinks, and desserts in equal measure.',
    howToStore: 'Trim the stems and place in a glass of water like flowers. Cover loosely with a plastic bag and refrigerate. Lasts up to 2 weeks this way.',
    howToPrep: 'Always add fresh mint at the end of cooking — heat destroys its volatile oils. For drinks, slap the leaves between your palms before adding to release the oils.',
    substitute: 'Basil for savory dishes, lemon balm for drinks, or a small amount of dried mint at a 1:3 ratio.',
    image: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?q=80&w=1000&auto=format&fit=crop',
    category: 'herbs',
    color: '#10B981'
  },
  {
    id: 'dates',
    name: 'Medjool Dates',
    tagline: 'Nature\'s caramel — sticky, rich, and far more complex than any processed sugar.',
    story: 'Medjool dates were once reserved exclusively for Moroccan royalty and called the fruit of kings. They are one of the few whole foods that are genuinely sweet enough to replace refined sugar completely in baking and cooking. Their caramel-like depth comes from natural sugars concentrated over months on the palm.',
    howToStore: 'At room temperature for up to a month. In the fridge for up to 6 months. Freeze for up to a year — they thaw in minutes.',
    howToPrep: 'Remove the pit by splitting lengthways. For caramel sauce blend pitted dates with hot water and a pinch of salt. For baking, process into a paste.',
    substitute: 'Dried figs or prunes for similar sweetness and texture. Maple syrup for liquid applications.',
    image: 'https://images.unsplash.com/photo-1609096458733-95b38583ac4e?q=80&w=1000&auto=format&fit=crop',
    category: 'fruits',
    color: '#92400E'
  },
  {
    id: 'cardamom',
    name: 'Green Cardamom',
    tagline: 'The queen of spices — floral, citrusy, and irreplaceable in both sweet and savory cooking.',
    story: 'Cardamom originated in the forests of Southern India and has been traded along the spice routes for over 4000 years. It is the world\'s third most expensive spice after saffron and vanilla. A single pod contains 8-16 seeds and each seed is packed with complex volatile oils that perfume everything around them.',
    howToStore: 'Always buy whole pods and grind fresh. Pre-ground cardamom loses 80% of its flavor within weeks. Whole pods keep for up to a year in an airtight container.',
    howToPrep: 'Crack pods with the flat of a knife, extract the seeds and grind in a mortar. For infusing liquids add whole crushed pods. Remove before serving.',
    substitute: 'A mix of cinnamon and ginger can approximate the warmth but never the floral complexity.',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1000&auto=format&fit=crop',
    category: 'spices',
    color: '#6B7280'
  },
  {
    id: 'ginger',
    name: 'Fresh Ginger',
    tagline: 'Fiery, warming, and medicinal — the backbone of cuisines across three continents.',
    story: 'Fresh ginger has been cultivated in South Asia for over 5000 years and spread along ancient trade routes to become one of the most universally used flavors on earth. It appears in Ugandan stews, Indian curries, Japanese pickles, Caribbean marinades, and European baking — no other ingredient crosses so many culinary borders.',
    howToStore: 'Unpeeled ginger keeps at room temperature for a week or in the fridge for a month. Freeze whole and grate from frozen — it grates easier and lasts 6 months.',
    howToPrep: 'Peel with a spoon edge to minimize waste. Grate on a microplane for marinades and teas. Slice thin for infusions. Julienne for stir-fries.',
    substitute: 'Ground ginger at 1/4 the quantity for baking. Galangal for Southeast Asian dishes.',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=1000&auto=format&fit=crop',
    category: 'vegetables',
    color: '#D97706'
  },
  {
    id: 'dark-chocolate',
    name: 'Dark Chocolate',
    tagline: 'At 70% and above, chocolate becomes a serious cooking ingredient — not just a treat.',
    story: 'Cacao has been consumed for over 3000 years, originally as a bitter ceremonial drink by the Olmec and Maya civilizations. The transformation into solid chocolate only happened in 1847. The percentage on the label tells you the ratio of cacao to sugar — above 70% you start tasting the actual terroir of where the beans were grown.',
    howToStore: 'Store at 18-20°C away from strong odors. Never refrigerate — condensation causes bloom. Properly stored dark chocolate lasts up to 2 years.',
    howToPrep: 'Always chop chocolate yourself rather than using chips — chips contain stabilizers that prevent proper melting. For tempering, melt to 45°C then cool to 27°C then bring back to 31°C.',
    substitute: 'Unsweetened cocoa powder plus butter for baking. Carob for caffeine-free applications.',
    image: 'https://images.unsplash.com/photo-1481391319762-47dff72954d9?q=80&w=1000&auto=format&fit=crop',
    category: 'dairy',
    color: '#3B1F0A'
  },
  {
    id: 'garlic',
    name: 'Garlic',
    tagline: 'The most fundamental flavor in human cooking — used on every continent for 7000 years.',
    story: 'Garlic was found in the tomb of Tutankhamun and fed to Egyptian pyramid builders for strength. It appears in virtually every cuisine on earth in some form. Raw garlic is sharp and pungent, roasted garlic becomes sweet and nutty, confit garlic becomes buttery and mild — it is three completely different ingredients depending on how you treat it.',
    howToStore: 'Whole bulbs at room temperature in a dry airy place for up to 3 months. Once broken, individual cloves last 2 weeks. Never refrigerate whole garlic.',
    howToPrep: 'Crush with the flat of a knife to release and make peeling easy. Mince for maximum pungency. Slice for moderate flavor. Roast whole heads at 180°C for 45 minutes for sweet spreadable garlic.',
    substitute: 'Garlic powder at 1/4 quantity. Asafoetida for those who cannot eat alliums.',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=1000&auto=format&fit=crop',
    category: 'vegetables',
    color: '#F3F4F6'
  },
  {
    id: 'saffron',
    name: 'Saffron',
    tagline: 'The world\'s most expensive spice — and the only one that genuinely cannot be faked.',
    story: 'Saffron comes from the stigmas of Crocus sativus — each flower produces only 3 threads and must be hand-harvested at dawn before the sun opens the petals. It takes 150,000 flowers to produce one kilogram. The flavor is unlike anything else — floral, honeyed, and faintly metallic with a color that transforms everything it touches into gold.',
    howToStore: 'In an airtight container away from light and moisture. Lasts up to 4 years if stored properly. Never buy ground saffron — it is almost always adulterated.',
    howToPrep: 'Always bloom saffron before use — steep threads in warm water, milk, or stock for 15-30 minutes. This releases far more color and flavor than adding dry threads directly.',
    substitute: 'Turmeric for color only. There is genuinely no flavor substitute for real saffron.',
    image: 'https://images.unsplash.com/photo-1607305387299-a3d9611cd469?q=80&w=1000&auto=format&fit=crop',
    category: 'spices',
    color: '#F59E0B'
  }
];