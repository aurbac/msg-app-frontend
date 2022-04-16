import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const ENDPOINT = "https://d2aw2eadrcqlj3.cloudfront.net/api/";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      token: "",
      messages: []
    };
  }
  
  loadMore() {
    let api = ENDPOINT + "messages";;
    if (this.state.toke!=="")
      api += "/"+this.state.token;
    fetch(api)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            messages: [...this.state.messages, ...result.messages],
            token: result.token
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )    
  }
  
  componentDidMount() {
    this.loadMore();
  }

  handleClickMore = event => {
    this.loadMore();
  }
  
  render() {
    const { error, isLoaded, messages, token } = this.state;
    if (error) {
      return <Box p={2}>
        <Typography variant="h4" align="center" gutterBottom="true">
          Welcome to Frontend!
        </Typography>
      </Box>;
    } else if (!isLoaded) {
      return <Box p={2}>Loading...</Box>;
    } else {
      return (
        <Box p={2}>
          <Container maxWidth="sm">
            <Typography variant="h4" align="center" gutterBottom>
              Welcome to Frontend!
            </Typography>
            <List>
              {messages.map(item => (
                <ListItem key={item.created_at}>
                  <ListItemAvatar>
                    <Avatar>
                      <ImageIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={item.message} secondary={item.created_at} />
                </ListItem>
              ))}
            </List>
            {token!=="" && (
              <Button variant="contained" color="primary" onClick={this.handleClickMore} disableElevation fullWidth>
                Load more messages
              </Button>
            )}
          </Container>
        </Box>
      );
    }
  }
}
export default App;