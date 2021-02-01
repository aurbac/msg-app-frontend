import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const ENDPOINT = "https://d1o3nf9kb1wa74.cloudfront.net/api/";

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
    if (this.state.toke!="")
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
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
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
          {token!="" && (
            <Button variant="contained" color="primary" onClick={this.handleClickMore} disableElevation fullWidth>
              Load more messages
            </Button>
          )}
          
        </Container>
      );
    }
  }
}
export default App;
