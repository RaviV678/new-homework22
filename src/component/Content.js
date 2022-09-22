import {Box , Container,Grid} from '@mui/material';
import {Link} from '@mui/material';
function Content(){
    return(
        <>
            <Box>
                <Container maxWidth='lg'>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>
                            contact
                            </Box>
                            <Box>
                            <Link href="/" color='inherit'>Help</Link>
                            </Box>
                            <Box>
                            <Link href="/" color='inherit'>support</Link>
                            </Box>
                            <Box>
                            <Link href="/" color='inherit'>privacy</Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        
        </>
    );
}
export default Content;