import styled from '@emotion/styled/'
import React from 'react'

const Hero = () => {

    const Container = styled('header')({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '105vh',
    })
    const Grid = styled('div')({
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        gap: '10vw',
        '& > div:nth-of-type(2) > svg': {
            width: '80%',
        }
    })
    const Left = styled('div')({
        '& > h1': {
            margin: 0,
            fontFamily: "'Raleway', sans-serif",
            fontSize: '2em',
            color: '#fff',
            fontWeight: '300',
            '& > span': {
                fontFamily: "'Marck Script', cursive",
                color: 'var(--b1)',
                fontSize: '3em',
            }
        },
        '& > a': {
            marginTop: '1em',
        }
    })

  return (
    <Container>
        <Grid>
            <Left>
                <h1>
                    Hello, I'm <br/><span>Ariq Fraser</span><br/>web designer &#38; developer
                </h1>

                <a id='heroButtonPos'/>
            </Left>
            
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="508" height="395" viewBox="0 0 508 395"><g transform="translate(-1109 -380)"><circle cx="151.5" cy="151.5" r="151.5" transform="translate(1109 380)" fill="#efcdaa"/><circle cx="110" cy="110" r="110" transform="translate(1397 555)" fill="#e6bda1"/><circle cx="66.5" cy="66.5" r="66.5" transform="translate(1426 405)" fill="#d19a73"/></g></svg>
            </div>
        </Grid>
    </Container>
    
  )
}

export default Hero