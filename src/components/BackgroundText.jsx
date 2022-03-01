import styled from "@emotion/styled"

export const BackgroundText = styled('span')((props) => ({
    textTransform: 'capitalize',
    fontFamily: '"Marck Script", cursive',
    color: 'rgba(178, 159, 129, 0.2)',
    fontSize: '20em',
    margin: '0',
    padding: '0',
    lineHeight: '0.7em',
    position: 'absolute',
    top: '0',
    left: '50%',
    transform: props.words === '1'? 'translateX(-50%)':'translateX(-65%)',
    zIndex: '-1',
    whiteSpace: 'pre-line',
    userSelect: 'none',
    '& > span': {
        marginLeft: '40%',
    }
}))