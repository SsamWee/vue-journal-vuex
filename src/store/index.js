
import { createStore } from 'vuex'

//import journalModule from "../modules/daybook/store/journal";

import journal from "../modules/daybook/store/journal";

const store = createStore({
    modules: {
        journal,
      //journal: journalModule
    }
 

    
    })


    export default store
