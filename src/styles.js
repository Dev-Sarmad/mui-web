
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme)=>({
    container:{
        padding:'30px',
    },
    icon:{
        marginRight:'10px',
    },
    buttons:{
        marginTop:'20px',
    },
    cardGrid:{
            padding:'20px, 0',
    },
    card:{
        height:'100%',
        display:'flex',
        flexDirection:'coloumn',
    },
    cardMedia:{
        paddingTop:'56.25%',
        height:'100%',
    },
    cardcontent:{
        flexGrow:'1',
    },
}))

export default useStyles;