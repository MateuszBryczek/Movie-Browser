import { ThemeProvider } from 'styled-components';

const colorNames = {
        White: "#FFFFFF",       //white
        Whisper: "#F5F5FA",     //light grey
        Mystic: "#E4E6F0",      //grey
        Waterloo: "#7E839A",    //dark grey
        MineShaft: "#333333",   //darker grey
        Woodsmoke: "#18181B",   //black
        Candlelight: "#FCD420", //yellow
        ScienceBlue: "#0044CC", //blue
        PattensBlue: "#D6E4FF", //light blue
};

export const GlobalTheme ={
    breakpoints:{
        smallDevices: 576,
        mediumDevices: 768,
        largeDevices: 1024,
        deskpots: 1100,
    },

    colors: {
        background: colorNames.Whisper,
        primary: colorNames.White,
        textPrimary: colorNames.Woodsmoke,
        header: {
            textPrimary: colorNames.White,
            primary: colorNames.Woodsmoke,
            secondary: colorNames.Waterloo,
        },
        searchBar: {
            textPrimary: colorNames.Waterloo,
            primary: colorNames.White,
            secondary: colorNames.Waterloo,
        },
        tile: {
            textPrimary: colorNames.Woodsmoke,
            textSecondary: colorNames.Waterloo,
            primary: colorNames.White,
            secondary: colorNames.Mystic,
            star: colorNames.Candlelight,
        },
        pager: {
            textSecondary: colorNames.Waterloo,
            leftBar: colorNames.Whisper,
            rightBar: colorNames.PattensBlue,
            rightVector: colorNames.ScienceBlue,
        },
        errorPage: {
            link: colorNames.ScienceBlue,
        }
    },
};

export default function Theme({ children }) {
    return <ThemeProvider theme={GlobalTheme}>{children}</ThemeProvider>;
}