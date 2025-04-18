import { FlatList } from "react-native-web";
import Category from "../models/Category";


function renderCategoryItem(itemData){
    return(
        <CategoryGridTitle/>
    )
}
function CategoryScreen(){

    return(
        <FlatList
           data={Category}
           keyExtractor={(item)=>item.id}
           renderItem={renderCategoryItem}
           numColumns={2}
        />
    )
}

export default CategoryScreen;