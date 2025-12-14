
// import CategoryRow from './CategoryRow'
// import CarouselComponent from './CarouselComponent';
// import {styled,Box} from '@mui/material';
// import HomeFooter from './HomeFooter';
// import { useState } from "react";
// import { schoolBooks,collegeBooks,  competitiveBooks,eBooks,notesAndGuides,authorCorner  } from "../../../data/data";
// import CategoryBooks from "./CategoryBooks";
// import AuthorCorner from "./AuthorCorner";

// const Home = () => {
//     const [selectedCategory, setSelectedCategory] = useState(null);
//      const categoryMap = {
//   "School Books": schoolBooks,
//   "College Books": collegeBooks,
//   "Competitive Exams": competitiveBooks,
//   "E-Books": eBooks,
//   "Notes & Guides": notesAndGuides,
// };

//   return (
//     <>
//          <CategoryRow
//          onCategoryClick={setSelectedCategory}/>
//          {!selectedCategory && (
//         <>
//           <Component>
//             <CarouselComponent />
//           </Component>

//         </>
//       )}

//       {selectedCategory && categoryMap[selectedCategory] && (
//         <CategoryBooks
//           title={selectedCategory}
//           books={categoryMap[selectedCategory]|| []}
//           type={selectedCategory}
//         />
//       )}
//       <AuthorCorner authors={authorCorner} />

//         <HomeFooter/>
        
//     </>
//   )
// }

// export default Home
// const Component=styled(Box)`
// padding:10px 10px;
// background:#F2F2F2;`





import { useState } from "react";
import { styled, Box } from "@mui/material";
import CategoryRow from "./CategoryRow";
import CarouselComponent from "./CarouselComponent";
import CategoryBooks from "./CategoryBooks";
import AuthorCorner from "./AuthorCorner";
import HomeFooter from "./HomeFooter";
import {
  schoolBooks,
  collegeBooks,
  competitiveBooks,
  eBooks,
  notesAndGuides,
  authorCorner,
} from "../../../data/data";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Map only categories that use BookSection / CategoryBooks
  const categoryMap = {
    "School Books": schoolBooks,
    "College Books": collegeBooks,
    "Competitive Exams": competitiveBooks,
    "E-Books": eBooks,
    "Notes & Guides": notesAndGuides,
  };

  return (
    <>
      <CategoryRow onCategoryClick={setSelectedCategory} />


      {!selectedCategory && (
        <Component>
          <CarouselComponent />
        </Component>
      )}

      {selectedCategory && categoryMap[selectedCategory] && (
        <CategoryBooks
          title={selectedCategory}
          books={categoryMap[selectedCategory]}
          type={selectedCategory}
        />
      )}
      {selectedCategory === "Author Corner" && (
        <AuthorCorner authors={authorCorner} />
      )}

      <HomeFooter />
    </>
  );
};

export default Home;

// Styled wrapper for carousel or other sections
const Component = styled(Box)`
  padding: 10px;
  background: #f2f2f2;
`;
