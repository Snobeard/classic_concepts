// import all images
function importAll(request) {
  let neighborhood = {
    floorPlans : [],
    logo : null,
  };
  console.log('LOADED FILES', request.keys()); // array of loaded files
  
  request.keys().forEach(key => {
    if (key.match(/\/floor-plans\//)) // match images in the containing folder 'floor-plans'
      neighborhood.floorPlans.push(request(key));
    
    if (key.match(/\/logo\//)) // match images in the containing folder 'logo'
      neighborhood.logo = request(key);

    if (key.match(/\/neighborhoods\/.+/)) {
      // console.log(key);
      console.log(key.match(/\/neighborhoods\/(.+)\//));
    }

      
  });
  
  return neighborhood; 
}

// directory to import, subdirectories = true / false, regex file match 
let highline = importAll(require.context('../images/', true, /\.(jpg|jpeg|gif|png|txt)$/)); 

// neighborhoods
export default [
  { // neighborhood 1
    title : 'Highline Station',
    logo : highline.logo,
    address : '1506 West Smith Court, Kent WA',
    subText : '27 lots',
    description : '27 single family condos. This new neighborhood is closed in to freeways, shopping, entertainment, and dining. Upgrades are available.',
    houses : [
      {
        title : 'House 1',
        squareFeet : '2,000 sq. ft, 2 Story',
        amenities : '3 bed, 2.5 bath, 2 car garage',
        'floor-plan' : highline.floorPlans,
      },
      {
        title : 'house 2',
        squareFeet : '20,000 sq. ft, 10 Story',
        amenities : '15 bed, 25 bath, 12 car garage',
        'floor-plan' : highline.floorPlans,
      },
    ],
  },
  { // neighborhood 2
    title : 'Second Station',
    logo : highline.logo,
    address : '2nd east Court, Kent WA',
    description : '72 single family condos. and things',
    houses : [
      {
        title : 'House 1',
        squareFeet : '1,000 sq. ft, 2 Story',
        amenities : '5 bed, 2.5 bath, 2 car garage',
        'floor-plan' : highline.floorPlans,
      },
      {
        title : 'house 2',
        squareFeet : '30 sq. ft, 10 Story',
        amenities : '0.125 bed, 0.4 bath, 0.0001 car garage',
        'floor-plan' : highline.floorPlans,
      },
    ],
  },
];