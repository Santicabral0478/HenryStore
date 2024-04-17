import { categories } from "./categories";
import { ICategory } from "./types";
import "./style.css"


export const CategoriesList:React.FunctionComponent = ()=>{
    return(
        <div className="categories-cont">
            {
                categories.map((category: ICategory)=>{
                    return(
                        <button key={category.id} className="category-item">
                            {category.name}
                        </button>
                    )
                })
            }
        </div>
    )
}

