const characters_array = [
  {
    id: "chr-0",
    name: "character0",
    price: 400,
    activity: ["party", "sport"],
    background: "fluff text",
    ageRange: "8-12",
    releaseYear: "2008",
  },
  {
    id: "chr-1",
    name: "character1",
    price: 500,
    activity: ["party", "sport"],
    background: "fluff text",
    ageRange: "8-12",
    releaseYear: "2009",
  },
  {
    id: "chr-2",
    name: "character2",
    price: 350,
    activity: ["babysitting"],
    background: "fluff text",
    ageRange: "4-6",
    releaseYear: "2012",
  },
  {
    id: "chr-3",
    name: "character3",
    price: 680,
    activity: ["party"],
    background: "fluff text",
    ageRange: "10-14",
    releaseYear: "2018",
  },
  {
    id: "chr-4",
    name: "character4",
    price: 420,
    activity: ["calm"],
    background: "fluff text",
    ageRange: "6-10",
    releaseYear: "2023",
  },
  {
    id: "chr-5",
    name: "character5",
    price: 750,
    activity: ["sports"],
    background: "fluff text",
    ageRange: "8-12",
    releaseYear: "2015",
  },
  {
    id: "chr-6",
    name: "character6",
    price: 590,
    activity: ["birthday"],
    background: "fluff text",
    ageRange: "5-9",
    releaseYear: "2021",
  },
  {
    id: "chr-7",
    name: "character7",
    price: 799,
    activity: ["party"],
    background: "fluff text",
    ageRange: "11-14",
    releaseYear: "2008",
  },
];

const bundles_array = [
  {
    id: "bndl-0",
    name: "holder0",
    price: 1000,
    members: ["chr-0", "chr-1", "chr-5"],
    activity: ["party", "sport"],
    background: "fluff text",
    ages: "6-12",
  },
  {
    id: "bndl-1",
    name: "holder1",
    price: 1200,
    members: ["chr-0", "chr-2", "chr-4"],
    activity: ["sport", "baby sitting"],
    background: "fluff text",
    ages: "4-11",
  },
  // {
  //   id: "bndl-2",
  //   name: "holder2",
  //   price: 950,
  //   members: ["chr-2", "chr-4", "chr-6"], // Links to character2, character4, and character6
  //   activity: ["calm", "baby sitting"],
  //   background: "fluff text",
  //   ages: "4-10",
  // },
  // {
  //   id: "bndl-3",
  //   name: "holder3",
  //   price: 1500,
  //   members: ["chr-1", "chr-3", "chr-5", "chr-7"], // Links to character1, character3, character5, and character7
  //   activity: ["party", "birthday"],
  //   background: "fluff text",
  //   ages: "8-14",
  // },
];

//get characters linked to bundles
function getBundleMembers(bundle) {
  return bundle.members.map((memberId) => {
    return characters_array.find((character) => character.id === memberId);
  });
}

// how many ppl in bundle
function getBundleNumber(bundle) {
  let result = getBundleMembers(bundle);
  return result.length;
}

//filter characters that contain certain activity
function getFilteredCharacters(filterTag) {
  return characters_array.filter((character) => {
    return character.activity.includes(filterTag);
  });
}
