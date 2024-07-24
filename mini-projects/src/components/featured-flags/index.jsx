import Theme from '../theme';
import TicTacToe from "../tic-tac-toe"
import RandomColorGenerator from "../random-color"
import Accordion from "../accordion"
import TreeMenu from "../tree-menu"
import treeview from '../tree-menu/data';
import { useContext } from 'react';
import { featuredFlagsContext } from './context';
import "./style.css"


export default function FeaturedFlags(){

    const {loading,enabledFlags} = useContext(featuredFlagsContext)

    const componentsToRender = [
        {
            key:"showLightAndDarkMode",
            component:<Theme/>
        },
        {
            key:"showTicTacToe",
            component:<TicTacToe/>
        },
        {
            key:"showRandomColorGenerator",
            component: <RandomColorGenerator/> 
        },
        {
            key:"showAccordian",
            component:<Accordion/> 
        },
        {
            key:"showTreeView",
            component:<TreeMenu menus={treeview}/>
        },
    ]

    if(loading){
        return <div>
           <h1>Loading data, Please wait</h1>
        </div>
    }

    function checkEnabledFlags(getCurrentKey){
        return enabledFlags[getCurrentKey]
    }
    return <div>
        <h1>Featured Flag</h1>

        {
            componentsToRender.map(componentItem=>(
                checkEnabledFlags(componentItem.key) ? componentItem.component : null
            ))
        }
    </div>
}