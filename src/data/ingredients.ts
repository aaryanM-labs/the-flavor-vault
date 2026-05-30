import type { IngredientSpotlight } from '../types';

export const INGREDIENTS: IngredientSpotlight[] = [
  // HERBS
  {
    id: 'mint',
    name: 'Fresh Mint',
    tagline: 'Cool, bright, and wildly versatile — mint belongs in your savory dishes too.',
    story: 'Mint is one of the oldest cultivated herbs on earth, found in Egyptian tombs dating back 3000 years. Most people think of it as a garnish but in Moroccan, Vietnamese, and Middle Eastern cooking it is a primary flavor — used in salads, stews, drinks, and desserts in equal measure.',
    howToStore: 'Trim the stems and place in a glass of water like flowers. Cover loosely with a plastic bag and refrigerate. Lasts up to 2 weeks this way.',
    howToPrep: 'Always add fresh mint at the end of cooking — heat destroys its volatile oils. For drinks, slap the leaves between your palms before adding to release the oils.',
    substitute: 'Basil for savory dishes, lemon balm for drinks, or dried mint at 1:3 ratio.',
    image: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?q=80&w=1000&auto=format&fit=crop',
    category: 'herbs',
    color: '#059669',
    recipes: ['Mint Lemonade', 'Moroccan Mint Tea', 'Mint Chutney', 'Mint Chocolate Chip Ice Cream', 'Tabbouleh']
  },
  {
    id: 'basil',
    name: 'Sweet Basil',
    tagline: 'The soul of Italian cooking — sweet, peppery, and irreplaceable.',
    story: 'Sacred in Hindu tradition and essential to Italian cuisine, basil has been cultivated for over 5000 years. The moment basil leaves are torn rather than cut, they release their essential oils — a trick every serious cook knows.',
    howToStore: 'Never refrigerate fresh basil — cold turns it black. Keep at room temperature in a glass of water on your counter.',
    howToPrep: 'Always tear by hand or add whole — cutting with a knife causes oxidation and blackening. Add at the very end of cooking.',
    substitute: 'Thai basil for Asian dishes, mint for freshness, or flat leaf parsley for color.',
    image: 'https://images.unsplash.com/photo-1618375569909-3c8616cf7733?q=80&w=1000&auto=format&fit=crop',
    category: 'herbs',
    color: '#059669',
    recipes: ['Classic Pesto', 'Caprese Salad', 'Basil Oil', 'Margherita Pizza', 'Thai Basil Chicken']
  },
  {
    id: 'rosemary',
    name: 'Fresh Rosemary',
    tagline: 'Piney, resinous, and powerful — a little goes a very long way.',
    story: 'Rosemary has been used since ancient times as a symbol of remembrance and love. Its highly aromatic oils are released best through heat — infused into oils, roasted with meats, or baked into breads.',
    howToStore: 'Wrap in a slightly damp paper towel and refrigerate for up to 2 weeks. Or dry upside down and keep for months.',
    howToPrep: 'Strip leaves from the woody stem. For infusions leave whole. Chop finely for mixing into dough or marinades. Always use sparingly.',
    substitute: 'Thyme is the closest substitute. Sage works for pork and poultry.',
    image: 'https://images.unsplash.com/photo-1515586000433-45406d8e6662?q=80&w=1000&auto=format&fit=crop',
    category: 'herbs',
    color: '#059669',
    recipes: ['Rosemary Focaccia', 'Rosemary Lamb Chops', 'Rosemary Infused Oil', 'Herb Roasted Potatoes', 'Rosemary Shortbread']
  },
  // SPICES
  {
    id: 'turmeric',
    name: 'Turmeric',
    tagline: 'The golden root that heals, colors, and transforms everything it touches.',
    story: 'Turmeric has been used for over 4000 years in South Asian cooking and Ayurvedic medicine. Its active compound curcumin is one of the most studied anti-inflammatory substances on earth. Always pair with black pepper which increases absorption by 2000%.',
    howToStore: 'Fresh turmeric keeps in the fridge for 2 weeks or frozen for 6 months. Ground turmeric keeps in an airtight container away from light for up to 3 years.',
    howToPrep: 'Wear gloves — turmeric stains everything permanently. Peel fresh turmeric with a spoon edge and grate or slice thin.',
    substitute: 'Saffron for color, ginger for warmth, or a mix of cumin and paprika for flavor.',
    image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?q=80&w=1000&auto=format&fit=crop',
    category: 'spices',
    color: '#B45309',
    recipes: ['Golden Milk', 'Turmeric Rice', 'Turmeric Tonic', 'Turmeric Scrambled Eggs', 'Turmeric Latte']
  },
  {
    id: 'cardamom',
    name: 'Green Cardamom',
    tagline: 'The queen of spices — floral, citrusy, and irreplaceable in sweet and savory cooking.',
    story: 'Cardamom originated in the forests of Southern India and has been traded along the spice routes for over 4000 years. It is the world\'s third most expensive spice after saffron and vanilla. Always buy whole pods and grind fresh.',
    howToStore: 'Always buy whole pods and grind fresh. Pre-ground cardamom loses 80% of its flavor within weeks. Whole pods keep for up to a year in an airtight container.',
    howToPrep: 'Crack pods with the flat of a knife, extract the seeds and grind in a mortar. For infusing liquids add whole crushed pods.',
    substitute: 'A mix of cinnamon and ginger can approximate the warmth but never the floral complexity.',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1000&auto=format&fit=crop',
    category: 'spices',
    color: '#B45309',
    recipes: ['Cardamom Coffee', 'Cardamom Knots', 'Chai Tea', 'Cardamom Rice Pudding', 'Mango Lassi']
  },
  {
    id: 'saffron',
    name: 'Saffron',
    tagline: 'The world\'s most expensive spice — and the only one that genuinely cannot be faked.',
    story: 'Saffron comes from the stigmas of Crocus sativus — each flower produces only 3 threads and must be hand-harvested at dawn. It takes 150,000 flowers to produce one kilogram. The flavor is floral, honeyed, and faintly metallic.',
    howToStore: 'In an airtight container away from light and moisture. Lasts up to 4 years if stored properly. Never buy ground saffron — it is almost always adulterated.',
    howToPrep: 'Always bloom saffron before use — steep threads in warm water or milk for 15-30 minutes. This releases far more color and flavor than adding dry threads directly.',
    substitute: 'Turmeric for color only. There is genuinely no flavor substitute for real saffron.',
    image: 'https://images.unsplash.com/photo-1607305387299-a3d9611cd469?q=80&w=1000&auto=format&fit=crop',
    category: 'spices',
    color: '#B45309',
    recipes: ['Saffron Risotto', 'Lamb Biryani', 'Saffron Butter Halibut', 'Saffron Milk Cake', 'Paella']
  },
  // VEGETABLES
  {
    id: 'garlic',
    name: 'Garlic',
    tagline: 'The most fundamental flavor in human cooking — used on every continent for 7000 years.',
    story: 'Garlic was found in the tomb of Tutankhamun and fed to Egyptian pyramid builders for strength. Raw garlic is sharp and pungent, roasted garlic becomes sweet and nutty, confit garlic becomes buttery and mild — it is three completely different ingredients depending on how you treat it.',
    howToStore: 'Whole bulbs at room temperature in a dry airy place for up to 3 months. Once broken, individual cloves last 2 weeks. Never refrigerate whole garlic.',
    howToPrep: 'Crush with the flat of a knife to release and make peeling easy. Mince for maximum pungency. Slice for moderate flavor. Roast whole heads at 180°C for 45 minutes for sweet spreadable garlic.',
    substitute: 'Garlic powder at 1/4 quantity. Asafoetida for those who cannot eat alliums.',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1000&auto=format&fit=crop',
    category: 'vegetables',
    color: '#0D5C63',
    recipes: ['Garlic Butter Shrimp', 'Roasted Garlic Soup', 'Garlic Confit', 'Ugandan Matoke Stew', 'Pad Thai']
  },
  {
    id: 'ginger',
    name: 'Fresh Ginger',
    tagline: 'Fiery, warming, and medicinal — the backbone of cuisines across three continents.',
    story: 'Fresh ginger has been cultivated in South Asia for over 5000 years. It appears in Ugandan stews, Indian curries, Japanese pickles, Caribbean marinades, and European baking — no other ingredient crosses so many culinary borders.',
    howToStore: 'Unpeeled ginger keeps at room temperature for a week or in the fridge for a month. Freeze whole and grate from frozen — it grates easier and lasts 6 months.',
    howToPrep: 'Peel with a spoon edge to minimize waste. Grate on a microplane for marinades and teas. Slice thin for infusions. Julienne for stir-fries.',
    substitute: 'Ground ginger at 1/4 the quantity for baking. Galangal for Southeast Asian dishes.',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=1000&auto=format&fit=crop',
    category: 'vegetables',
    color: '#0D5C63',
    recipes: ['Ginger Tea', 'Jerk Chicken', 'Ginger Snap Cookies', 'Golden Tonic', 'Mango Lassi']
  },
  // FRUITS
  {
    id: 'dates',
    name: 'Medjool Dates',
    tagline: 'Nature\'s caramel — sticky, rich, and far more complex than any processed sugar.',
    story: 'Medjool dates were once reserved exclusively for Moroccan royalty and called the fruit of kings. They are one of the few whole foods that are genuinely sweet enough to replace refined sugar completely in baking and cooking.',
    howToStore: 'At room temperature for up to a month. In the fridge for up to 6 months. Freeze for up to a year — they thaw in minutes.',
    howToPrep: 'Remove the pit by splitting lengthways. For caramel sauce blend pitted dates with hot water and a pinch of salt. For baking, process into a paste.',
    substitute: 'Dried figs or prunes for similar sweetness. Maple syrup for liquid applications.',
    image: 'https://images.unsplash.com/photo-1609096458733-95b38583ac4e?q=80&w=1000&auto=format&fit=crop',
    category: 'fruits',
    color: '#FF6B6B',
    recipes: ['Date Caramel Sauce', 'Date & Walnut Cake', 'Date Seed Coffee', 'Stuffed Medjool Dates', 'Date Smoothie', 'Sticky Toffee Pudding']
  },
  {
    id: 'lemon',
    name: 'Fresh Lemon',
    tagline: 'The great balancer — acid that makes every other flavor taste more like itself.',
    story: 'Lemon originated in Northeast India and spread through Persia and the Middle East before reaching Europe. Its juice is acid, its zest is intensely fragrant with essential oils, and its pith is bitter — three completely different flavor components in one fruit.',
    howToStore: 'At room temperature for up to a week. In the fridge for up to a month. Zest before juicing and freeze the zest separately.',
    howToPrep: 'Roll on a hard surface before cutting to release more juice. Zest only the yellow part — the white pith is bitter. A microplane gives the finest zest.',
    substitute: 'Lime juice for acidity. White wine vinegar in a pinch.',
    image: 'https://images.unsplash.com/photo-1587486913049-53fc88980cfc?q=80&w=1000&auto=format&fit=crop',
    category: 'fruits',
    color: '#FF6B6B',
    recipes: ['Lemon Tart', 'Lemon Curd', 'Preserved Lemons', 'Lemon Drizzle Cake', 'Lemon Herb Chicken']
  },
  // GRAINS
  {
    id: 'millet',
    name: 'Millet',
    tagline: 'Ancient, nutritious, and central to East African cooking for thousands of years.',
    story: 'Millet is one of the oldest cultivated crops in the world and remains a staple across Africa and Asia. In Uganda it is used to make obushera, a traditional fermented drink, and as a porridge base. It is gluten-free, high in protein, and deeply nutritious.',
    howToStore: 'Uncooked millet keeps in an airtight container for up to 2 years. Cooked millet keeps in the fridge for 5 days.',
    howToPrep: 'Toast dry millet in a pan for 3 minutes before cooking to add a nutty depth. Cook at 1:2 ratio with water for 20 minutes.',
    substitute: 'Quinoa or couscous for similar texture in savory dishes.',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=1000&auto=format&fit=crop',
    category: 'grains',
    color: '#92400E',
    recipes: ['Obushera', 'Millet Porridge', 'Millet Flatbread', 'Millet Salad', 'Fermented Millet Drink']
  },
  // DAIRY
  {
    id: 'dark-chocolate',
    name: 'Dark Chocolate',
    tagline: 'At 70% and above, chocolate becomes a serious cooking ingredient — not just a treat.',
    story: 'Cacao has been consumed for over 3000 years, originally as a bitter ceremonial drink by the Olmec and Maya. The percentage on the label tells you the ratio of cacao to sugar — above 70% you start tasting the actual terroir of where the beans were grown.',
    howToStore: 'Store at 18-20°C away from strong odors. Never refrigerate. Properly stored dark chocolate lasts up to 2 years.',
    howToPrep: 'Always chop chocolate yourself rather than using chips — chips contain stabilizers that prevent proper melting. For tempering melt to 45°C then cool to 27°C then bring back to 31°C.',
    substitute: 'Unsweetened cocoa powder plus butter for baking.',
    image: 'https://images.unsplash.com/photo-1481391319762-47dff72954d9?q=80&w=1000&auto=format&fit=crop',
    category: 'dairy',
    color: '#D97706',
    recipes: ['Dark Chocolate Lava Cake', 'Chocolate Mousse', 'Chocolate Truffles', 'Brownie', 'Chocolate Tart']
  },
  {
    id: 'butter',
    name: 'Cultured Butter',
    tagline: 'The difference between good food and extraordinary food is almost always butter.',
    story: 'Cultured butter is made from cream that has been fermented with live bacterial cultures before churning — giving it a complex, tangy, nutty flavor that regular sweet cream butter cannot match. It is what professional kitchens use.',
    howToStore: 'Salted butter keeps at room temperature for up to 2 weeks. Unsalted must be refrigerated. Both freeze for up to a year.',
    howToPrep: 'Brown butter by cooking until the milk solids turn golden and nutty — this is called beurre noisette and transforms sauces, cakes and cookies.',
    substitute: 'Ghee for high-heat cooking. Coconut oil for dairy-free baking.',
    image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?q=80&w=1000&auto=format&fit=crop',
    category: 'dairy',
    color: '#D97706',
    recipes: ['Brown Butter Cookies', 'Beurre Blanc', 'Butter Chicken', 'Croissants', 'Hollandaise']
  },
 
];