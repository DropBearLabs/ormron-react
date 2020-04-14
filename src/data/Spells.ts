import { Spells, ICharacterSpell } from "../types/TypeCharacters";

export const spells: ICharacterSpell[] = [
  {
    id: Spells.maya_healSelf,
    name: "Heal",
    description:
      "Pudding danish chocolate cake icing halvah icing bear claw. Sweet roll oat cake candy canes gummi bears cake tart. Donut sesame snaps cheesecake fruitcake dragée wafer chupa chups tootsie roll. ",
    image: "temp-spell2.jpg",
    position: { x: 180, y: 15 },
    area: [{ x: 0, y: 0 }]
  },
  {
    id: Spells.maya_attackSimple,
    name: "Kick",
    description:
      "Sweet sweet cake muffin jelly beans. Tiramisu oat cake chocolate pastry tootsie roll tart wafer liquorice tart. Oat cake tart toffee sweet croissant candy canes macaroon.",
    image: "temp-spell2.jpg",
    position: { x: 135, y: 40 },
    area: [{ x: +2, y: 0 }]
  },
  {
    id: Spells.maya_reinforce,
    name: "Reinforce",
    description:
      "Cake tootsie roll tart candy. Muffin lemon drops brownie topping tart. Sesame snaps wafer sugar plum biscuit liquorice candy canes cake jelly beans brownie.",
    image: "temp-spell2.jpg",
    position: { x: 225, y: 40 },
    area: []
  },
  {
    id: Spells.maya_heal1,
    name: "Healing hand",
    description:
      "Gummi bears gummi bears gummies pudding tiramisu macaroon powder chupa chups cheesecake. Oat cake jelly-o jelly gingerbread apple pie. Sweet pudding marshmallow.",
    image: "temp-spell2.jpg",
    position: { x: 215, y: 110 },
    area: [{ x: 0, y: +1 }]
  },
  {
    id: Spells.maya_attackMagic,
    name: "Stone",
    description:
      "Gummies cheesecake oat cake liquorice cake. Toffee caramels croissant sugar plum. Carrot cake candy chocolate powder sesame snaps powder chocolate cake.",
    image: "temp-spell2.jpg",
    position: { x: 125, y: 105 },
    area: [{ x: +2, y: 1 }]
  },
  {
    id: Spells.maya_heal3,
    name: "Healing pollen",
    description:
      "Dessert sesame snaps halvah chocolate bar pastry fruitcake cheesecake bonbon. Jujubes fruitcake jelly-o toffee dragée. Donut chupa chups gummi bears pudding. Sugar plum pudding chocolate cake gummi bears.",
    image: "temp-spell2.jpg",
    position: { x: 245, y: 160 },
    area: []
  },
  {
    id: Spells.maya_attackStun,
    name: "Rockslide",
    description:
      "Candy canes jelly beans fruitcake donut. Caramels wafer cake. Pudding fruitcake gummi bears dragée candy canes bear claw cotton candy.",
    image: "temp-spell2.jpg",
    position: { x: 90, y: 150 },
    area: []
  },
  {
    id: Spells.maya_attackPush,
    name: "Avalange",
    description:
      "Croissant danish gummi bears pastry. Bear claw topping cheesecake. Dessert toffee gummies carrot cake cupcake tiramisu macaroon wafer sweet.",
    image: "temp-spell2.jpg",
    position: { x: 25, y: 255 },
    area: []
  },
  {
    id: Spells.maya_dispell,
    name: "Leaf fall",
    description:
      "jelly-o donut icing chocolate cake jelly. Jelly beans pudding macaroon tart soufflé powder danish. Croissant carrot cake lemon drops candy canes wafer gingerbread cotton candy.",
    image: "temp-spell2.jpg",
    position: { x: 305, y: 270 },
    area: []
  },
  {
    id: Spells.maya_earthquake,
    name: "Earthquake",
    description:
      "Chocolate bar cookie ice cream danish jujubes cake. Muffin marzipan candy canes chocolate bar. Carrot cake gummies biscuit. Chocolate bar marshmallow marshmallow sesame snaps jelly jujubes chocolate cake croissant.",
    image: "temp-spell2.jpg",
    position: { x: 135, y: 190 },
    area: []
  },
  {
    id: Spells.maya_resurrect,
    name: "Resurrection",
    description:
      "Chocolate cake soufflé chupa chups halvah cake tart. Sweet roll brownie bonbon pudding pudding. Carrot cake marshmallow donut chupa chups sweet roll. Gingerbread brownie powder cake cupcake.",
    image: "temp-spell2.jpg",
    position: { x: 190, y: 355 },
    area: []
  },
  {
    id: Spells.maya_quickSand,
    name: "Quick sand",
    description:
      "Danish oat cake jelly chocolate bar pastry jelly candy canes bonbon wafer. Tart chocolate cookie cotton candy sweet chocolate bar cotton candy. Marshmallow liquorice cotton candy lollipop. Cake sweet jujubes tart jelly cupcake tart pie.",
    image: "temp-spell2.jpg",
    position: { x: 200, y: 195 },
    area: []
  },
  {
    id: Spells.maya_chamber,
    name: "Burrial",
    description:
      "Chocolate bar sweet roll dessert cookie soufflé toffee sweet. Biscuit apple pie bear claw. Gummies halvah marshmallow.",
    image: "temp-spell2.jpg",
    position: { x: 95, y: 345 },
    area: []
  },
  // TARA
  {
    id: Spells.tara_attack1,
    name: "Slash",
    description:
      "Ice cream lollipop tootsie roll tart brownie soufflé chocolate cake. Cheesecake dessert powder gummi bears gummi bears. Donut ice cream biscuit jujubes macaroon dragée marshmallow.",
    image: "temp-spell3.jpg",
    position: { x: 200, y: 70 },
    area: [{ x: +1, y: 0 }]
  },
  {
    id: Spells.tara_attack2a,
    name: "Tearing claw",
    description:
      "Apple pie sugar plum fruitcake carrot cake topping muffin dragée jelly beans chocolate bar. Biscuit danish chocolate bar croissant cake jujubes cookie. Dragée liquorice gummi bears. Sweet candy chocolate pie ice cream jujubes cake cheesecake.",
    image: "temp-spell3.jpg",
    position: { x: 80, y: 90 },
    area: []
  },
  {
    id: Spells.tara_attack2b,
    name: "Twin Thrust",
    description:
      "Chupa chups pastry macaroon gingerbread danish dragée candy dragée. Chocolate lemon drops halvah pastry chocolate cake. Chocolate cake jelly beans dragée. Chupa chups toffee brownie dragée jujubes brownie pastry.",
    image: "temp-spell3.jpg",
    position: { x: 85, y: 170 },
    area: []
  },
  {
    id: Spells.tara_bleed,
    name: "Bleed",
    description:
      "Biscuit cake chupa chups cupcake. Sweet roll tootsie roll topping candy gummi bears chupa chups cake. Croissant gingerbread toffee jelly-o tiramisu. Macaroon marzipan lemon drops gummi bears.",
    image: "temp-spell3.jpg",
    position: { x: 180, y: 190 },
    area: []
  },
  {
    id: Spells.tara_attack3a,
    name: "Lightning strike",
    description:
      "Lollipop fruitcake jelly cotton candy cupcake. Sugar plum lemon drops icing oat cake dragée soufflé candy canes cotton candy. Chupa chups marshmallow cake. Powder jujubes jelly beans caramels tiramisu cheesecake jelly-o sweet sweet.",
    image: "temp-spell3.jpg",
    position: { x: 20, y: 190 },
    area: []
  },
  {
    id: Spells.tara_attack3b,
    name: "Thunder storm",
    description:
      "Cupcake sugar plum sesame snaps chocolate halvah cake gummi bears. Muffin apple pie muffin fruitcake jujubes. Pudding halvah cheesecake croissant bonbon.",
    image: "temp-spell3.jpg",
    position: { x: 30, y: 260 },
    area: []
  },
  {
    id: Spells.tara_will,
    name: "Will power",
    description:
      "Cupcake cupcake lemon drops sesame snaps muffin. Ice cream cotton candy marzipan fruitcake cheesecake lollipop chocolate donut. Oat cake lemon drops pudding jelly-o cookie. Sweet roll sesame snaps tootsie roll cupcake dessert brownie.",
    image: "temp-spell3.jpg",
    position: { x: 315, y: 175 },
    area: []
  },
  {
    id: Spells.tara_pare,
    name: "Parry",
    description:
      "Caramels fruitcake gummi bears lollipop. Tiramisu danish cotton candy cake muffin dragée. Cupcake pie dessert muffin soufflé candy brownie. Tiramisu cupcake marzipan lollipop lemon drops jelly apple pie.",
    image: "temp-spell3.jpg",
    position: { x: 350, y: 350 },
    area: []
  },
  {
    id: Spells.tara_pull,
    name: "Lightning chain",
    description:
      "Dragée lemon drops halvah ice cream tiramisu. Jelly beans biscuit macaroon chocolate bar liquorice. Dessert caramels topping dessert.",
    image: "temp-spell3.jpg",
    position: { x: 30, y: 350 },
    area: []
  },
  {
    id: Spells.tara_push,
    name: "Thunderball",
    description:
      "Apple pie bear claw muffin donut chupa chups topping fruitcake muffin jelly-o. Marzipan jelly tiramisu pudding halvah carrot cake bonbon jelly beans. Pastry cupcake jelly pie icing candy liquorice. Biscuit sesame snaps jujubes topping bear claw tiramisu biscuit.",
    image: "temp-spell3.jpg",
    position: { x: 120, y: 360 },
    area: []
  },
  {
    id: Spells.tara_finish,
    name: "Finishing blow",
    description:
      "Bonbon pie bear claw. Halvah ice cream pudding apple pie cake. Jujubes biscuit tootsie roll cotton candy biscuit chupa chups.",
    image: "temp-spell3.jpg",
    position: { x: 240, y: 350 },
    area: []
  },
  // NELL
  {
    id: Spells.nell_fireFist,
    name: "Fire Fist",
    description:
      "Sweet roll lollipop dessert chocolate bar ice cream. Halvah fruitcake marshmallow muffin sugar plum gingerbread sugar plum. Brownie marshmallow chocolate bar toffee ice cream.",
    image: "temp-spell1.jpg",
    position: { x: 105, y: 35 },
    area: [{ x: +1, y: 0 }]
  },
  {
    id: Spells.nell_doubleTap,
    name: "Double Tap",
    description:
      "Pudding soufflé pudding cake jelly-o icing jelly beans. Caramels cheesecake carrot cake bear claw sweet roll pudding. Chocolate bar marshmallow oat cake marzipan brownie. Sesame snaps muffin donut jelly topping.",
    image: "temp-spell1.jpg",
    position: { x: 190, y: 85 },
    area: [
      { x: +1, y: 0 },
      { x: +1, y: -1 }
    ]
  },
  {
    id: Spells.nell_fireBall,
    name: "Fire Ball",
    description:
      "Topping cupcake donut liquorice jelly beans lollipop. Sweet donut jelly brownie sweet roll sweet jelly beans muffin. Cheesecake gummi bears cookie topping topping croissant tiramisu. Toffee chocolate lollipop tiramisu.",
    image: "temp-spell1.jpg",
    position: { x: 230, y: 140 },
    area: []
  },
  {
    id: Spells.nell_fireRain,
    name: "Fire Rain",
    description:
      "Oat cake oat cake halvah danish macaroon chupa chups oat cake. Biscuit tootsie roll chocolate cake pudding. Ice cream pastry muffin chocolate lemon drops tootsie roll. Gummies apple pie gummi bears macaroon tart jelly carrot cake cake marshmallow.",
    image: "temp-spell1.jpg",
    position: { x: 146, y: 135 },
    area: [
      { x: +2, y: +1 },
      { x: +2, y: 0 }
    ]
  },
  {
    id: Spells.nell_intoCorner,
    name: "Into The Corner",
    description:
      "Oat cake chocolate bar gingerbread candy canes gummi bears tart oat cake marshmallow. Cupcake apple pie cake cake liquorice fruitcake caramels sesame snaps. Ice cream lemon drops lemon drops danish bear claw sweet croissant jujubes jelly.",
    image: "temp-spell1.jpg",
    position: { x: 190, y: 175 },
    area: [
      { x: +1, y: 0 },
      { x: +2, y: +1 }
    ]
  },
  {
    id: Spells.nell_forestFire,
    name: "Forest Fire",
    description:
      "Cake halvah tootsie roll tootsie roll pastry. Ice cream tart candy tootsie roll sweet. Sweet danish powder caramels candy. Liquorice toffee toffee candy canes chupa chups oat cake gummi bears marzipan.",
    image: "temp-spell1.jpg",
    position: { x: 80, y: 220 },
    area: []
  },
  {
    id: Spells.nell_cross,
    name: "Cross",
    description:
      "Brownie marshmallow sugar plum pastry icing pie cookie. Sweet jelly-o sweet marzipan caramels chupa chups powder cake sweet roll. Powder lollipop dessert dessert cookie.",
    image: "temp-spell1.jpg",
    position: { x: 290, y: 230 },
    area: [{ x: +1, y: 0 }]
  },
  {
    id: Spells.nell_protect,
    name: "Protect",
    description:
      "Powder toffee powder fruitcake dragée icing croissant cheesecake. Cupcake cookie fruitcake soufflé. Chupa chups biscuit gummies. Caramels topping carrot cake.",
    image: "temp-spell1.jpg",
    position: { x: 210, y: 225 },
    area: []
  },
  {
    id: Spells.nell_protect2,
    name: "Guardian",
    description:
      "Danish liquorice topping. Lemon drops chupa chups marzipan. Jelly-o bonbon wafer soufflé toffee chocolate bar cookie macaroon. Chocolate chocolate bar candy canes chocolate bar toffee gingerbread brownie.",
    image: "temp-spell1.jpg",
    position: { x: 350, y: 340 },
    area: []
  },
  {
    id: Spells.nell_berserker,
    name: "Berserker",
    description:
      "Halvah cake cake chocolate cake. Liquorice topping candy. Chocolate cake tootsie roll dessert lemon drops liquorice donut pastry dragée.",
    image: "temp-spell1.jpg",
    position: { x: 195, y: 285 },
    area: []
  },
  {
    id: Spells.nell_burn,
    name: "Burn",
    description:
      "Carrot cake ice cream candy sugar plum. Biscuit cake brownie apple pie. Bear claw chupa chups sugar plum cupcake cupcake jelly tiramisu marzipan icing.",
    image: "temp-spell1.jpg",
    position: { x: 140, y: 240 },
    area: []
  },
  {
    id: Spells.nell_fireWall,
    name: "Fire Wall",
    description:
      "Gingerbread chocolate cake macaroon gingerbread halvah oat cake jelly jelly beans caramels. Dessert fruitcake liquorice pudding candy. Biscuit sweet pie tart sweet roll pie pastry biscuit.",
    image: "temp-spell1.jpg",
    position: { x: 30, y: 350 },
    area: []
  },
  // DART
  {
    id: Spells.dart_wave,
    name: "Wave",
    description:
      "Caramels pastry powder marshmallow dessert cotton candy tiramisu sesame snaps. Bonbon croissant ice cream. Candy canes fruitcake soufflé pudding candy. Cake carrot cake pudding gummies icing soufflé.",
    image: "temp-spell4.jpg",
    position: { x: 150, y: 45 },
    area: [{ x: 2, y: 0 }]
  },
  {
    id: Spells.dart_icePick,
    name: "Ice Pick",
    description:
      "Tiramisu jelly powder tootsie roll. Macaroon oat cake marzipan. Gummies marzipan jujubes chupa chups.",
    image: "temp-spell4.jpg",
    position: { x: 270, y: 55 },
    area: [
      { x: 2, y: 0 },
      { x: 1, y: 0 }
    ]
  },
  {
    id: Spells.dart_deepWater,
    name: "Deep Water",
    description:
      "Carrot cake lemon drops pudding pastry icing ice cream oat cake cake cotton candy. Jujubes gummies tootsie roll chupa chups sugar plum icing donut oat cake. Cotton candy lollipop croissant biscuit sugar plum soufflé bear claw chocolate cake.",
    image: "temp-spell4.jpg",
    position: { x: 225, y: 145 },
    area: [
      { x: 2, y: 0 },
      { x: 2, y: +1 }
    ]
  },
  {
    id: Spells.dart_whirPool,
    name: "Whirpool",
    description:
      "Brownie oat cake cheesecake macaroon cake. Chocolate bar tart halvah gingerbread. Ice cream cake marzipan marzipan macaroon lollipop. Muffin chocolate bar candy topping tiramisu tootsie roll.",
    image: "temp-spell4.jpg",
    position: { x: 305, y: 140 },
    area: [
      { x: 3, y: 0 },
      { x: 2, y: +1 }
    ]
  },
  {
    id: Spells.dart_ripCurl,
    name: "Rup Curl",
    description:
      "Gingerbread jelly beans tiramisu cake brownie biscuit. Topping donut gummies pastry marzipan cotton candy lemon drops pie. Oat cake biscuit gingerbread jelly-o chocolate cake fruitcake candy donut. Gummi bears pastry pie icing.",
    image: "temp-spell4.jpg",
    position: { x: 105, y: 120 },
    area: []
  },
  {
    id: Spells.dart_blizzard,
    name: "Blizzard",
    description:
      "Macaroon danish gummies wafer. Marshmallow danish caramels. Jelly-o pudding marshmallow powder dragée.",
    image: "temp-spell4.jpg",
    position: { x: 115, y: 195 },
    area: []
  },
  {
    id: Spells.dart_drown,
    name: "Drowning",
    description:
      "Donut bonbon cookie. Tart pastry carrot cake pastry. Cake biscuit jujubes chocolate bar apple pie marshmallow powder sweet.",
    image: "temp-spell4.jpg",
    position: { x: 100, y: 310 },
    area: []
  },
  {
    id: Spells.dart_tsunami,
    name: "Tsunami",
    description:
      "Cookie jelly-o halvah jelly-o pastry chocolate jelly beans biscuit. Tootsie roll ice cream carrot cake wafer. Gummi bears tiramisu wafer bonbon fruitcake croissant croissant.",
    image: "temp-spell4.jpg",
    position: { x: 175, y: 340 },
    area: []
  },
  {
    id: Spells.dart_fear,
    name: "Fear",
    description:
      "Sweet roll macaroon bear claw tiramisu dessert. Cookie sweet roll toffee cotton candy donut jelly-o lemon drops. Danish sugar plum marshmallow danish tart sweet roll lemon drops marzipan.",
    image: "temp-spell4.jpg",
    position: { x: 355, y: 215 },
    area: []
  },
  {
    id: Spells.dart_soulCatcher,
    name: "Soul Catcher",
    description:
      "Pastry halvah pudding fruitcake cake cotton candy jelly-o halvah. Sweet roll chupa chups muffin. Liquorice caramels sugar plum tart wafer muffin pie bear claw danish. Croissant cotton candy lemon drops.",
    image: "temp-spell4.jpg",
    position: { x: 155, y: 255 },
    area: []
  },
  {
    id: Spells.dart_frostBite,
    name: "Frost Bite",
    description:
      "Sweet danish oat cake gingerbread danish jelly beans cheesecake tart. Donut gingerbread bear claw sesame snaps muffin cotton candy cupcake muffin tootsie roll. Brownie fruitcake tiramisu donut powder.",
    image: "temp-spell4.jpg",
    position: { x: 240, y: 245 },
    area: []
  },
  {
    id: Spells.dart_iceberg,
    name: "Soul Crash",
    description:
      "Biscuit cookie chocolate bar pie bonbon macaroon tootsie roll. Liquorice cupcake cupcake halvah. Jelly beans marshmallow cupcake apple pie oat cake jujubes pudding. Biscuit carrot cake oat cake ice cream chocolate sweet fruitcake.",
    image: "temp-spell4.jpg",
    position: { x: 45, y: 260 },
    area: []
  },
  // GREY
  {
    id: Spells.grey_blast,
    name: "Blast",
    description:
      "Chupa chups jujubes toffee powder jelly. Macaroon ice cream sugar plum jelly-o candy apple pie tiramisu. Halvah sugar plum cupcake halvah gummi bears caramels gummi bears. Muffin croissant dragée chocolate bar.",
    image: "temp-spell5.jpg",
    position: { x: 210, y: 15 },
    area: [{ x: +3, y: 0 }]
  },
  {
    id: Spells.grey_numb,
    name: "Numb",
    description:
      "Sweet roll icing liquorice pudding pudding cotton candy chocolate bar toffee. Bonbon sugar plum cookie apple pie jelly-o tootsie roll danish. Dragée icing wafer ice cream brownie lemon drops pastry.",
    image: "temp-spell5.jpg",
    position: { x: 145, y: 55 },
    area: [{ x: +2, y: 0 }]
  },
  {
    id: Spells.grey_pullIn,
    name: "Pull In",
    description:
      "Icing fruitcake jelly beans ice cream. Icing liquorice carrot cake ice cream candy canes. Danish gingerbread carrot cake chocolate chocolate cake. Cookie oat cake powder candy canes halvah candy canes halvah lemon drops.",
    image: "temp-spell5.jpg",
    position: { x: 175, y: 150 },
    area: []
  },
  {
    id: Spells.grey_poison,
    name: "Poison",
    description:
      "Powder cake bonbon jelly-o croissant oat cake candy canes macaroon sweet. Cupcake macaroon apple pie cupcake. Marshmallow sweet roll bear claw sesame snaps pie icing sweet roll chocolate cake oat cake. Sugar plum macaroon lemon drops.",
    image: "temp-spell5.jpg",
    position: { x: 100, y: 120 },
    area: [
      { x: +3, y: 0 },
      { x: +2, y: +1 }
    ]
  },
  {
    id: Spells.grey_toxin,
    name: "Toxin",
    description:
      "Jelly-o fruitcake cheesecake marzipan tootsie roll chupa chups topping. Jelly beans gummi bears cupcake bear claw topping apple pie. Cotton candy tootsie roll biscuit jelly beans candy gingerbread dragée. Muffin macaroon toffee macaroon.",
    image: "temp-spell5.jpg",
    position: { x: 80, y: 225 },
    area: []
  },
  {
    id: Spells.grey_sellOut,
    name: "Sell Out",
    description:
      "Lemon drops topping lollipop jujubes. Tart gummi bears icing gummies lemon drops lemon drops candy canes. Lemon drops cotton candy icing wafer brownie ice cream.",
    image: "temp-spell5.jpg",
    position: { x: 250, y: 125 },
    area: []
  },
  {
    id: Spells.grey_chaos,
    name: "Chaos",
    description:
      "Jujubes chocolate croissant apple pie. Bonbon pudding soufflé cotton candy. Lemon drops toffee dragée donut gummi bears biscuit caramels bonbon.",
    image: "temp-spell5.jpg",
    position: { x: 280, y: 240 },
    area: []
  },
  {
    id: Spells.grey_stun,
    name: "Stun",
    description:
      "Cake topping halvah chocolate bar tootsie roll. Marzipan tiramisu donut sweet dessert dessert gingerbread. Jelly beans muffin sweet roll.",
    image: "temp-spell5.jpg",
    position: { x: 175, y: 230 },
    area: []
  },
  {
    id: Spells.grey_soundWave,
    name: "Sound Wave",
    description:
      "Donut macaroon lemon drops croissant lemon drops marshmallow chocolate. Sweet macaroon topping muffin tootsie roll ice cream. Oat cake chupa chups gingerbread biscuit tart apple pie.",
    image: "temp-spell5.jpg",
    position: { x: 150, y: 270 },
    area: [
      { x: +3, y: 0 },
      { x: +3, y: +1 },
      { x: +3, y: -1 }
    ]
  },
  {
    id: Spells.grey_gust,
    name: "Gust",
    description:
      "Pastry jelly biscuit gummi bears cookie muffin carrot cake tiramisu icing. Lollipop soufflé ice cream cake marshmallow powder chocolate cake candy canes cupcake. Cotton candy topping sweet cookie halvah powder topping sesame snaps icing.",
    image: "temp-spell5.jpg",
    position: { x: 175, y: 305 },
    area: []
  },
  {
    id: Spells.grey_tornado,
    name: "Tornado",
    description:
      "Caramels chocolate bar danish sweet roll. Pastry gingerbread tiramisu halvah. Gingerbread danish tiramisu.",
    image: "temp-spell5.jpg",
    position: { x: 140, y: 350 },
    area: []
  },
  {
    id: Spells.grey_cyclone,
    name: "Cyclone",
    description:
      "Marshmallow pie dessert cake brownie bear claw sweet. Tart candy canes cupcake. Cake jujubes topping pie croissant chupa chups oat cake croissant.",
    image: "temp-spell5.jpg",
    position: { x: 205, y: 340 },
    area: []
  }
];
