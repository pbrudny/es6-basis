const GIPHY_API_URL = 'http://api.giphy.com'
const GIPHY_PUB_KEY = 'dc6zaTOxFJmzC'

App = React.createClass({
    getInitialState() {
      return {
          loading: false,
          searchingText: '',
          gif: {}
      };
    },

    getGif: searchingText => {
        return new Promise(
            (resolve, reject) => {
                const url = GIPHY_API_URL + '/v1/gifs/random?api_key=' + GIPHY_PUB_KEY + '&tag=' + searchingText;
                const xhr = new XMLHttpRequest();
                xhr.onload = () => {
                    if (xhr.status === 200) {
                        const data = JSON.parse(xhr.responseText).data;
                        const gif = {
                            url: data.fixed_width_downsampled_url,
                            sourceUrl: data.url
                        };
                        resolve(gif);
                    } else {
                        reject(new Error(xhr.statusText));
                    }
                };
                xhr.onerror = () => reject(new Error(`XMLHttpRequest Error: ${xhr.statusText}`));
                xhr.open('GET', url);
                xhr.send();
            }
        );
    },

    handleSearch: function(searchingText) {
        this.setState({
            loading: true  
        });
        this.getGif(searchingText).then(gif => {
            this.setState({
                loading: false,
                gif: gif,
                searchingText: searchingText
            });
        });
    },
   render: function () {
       const styles = {
           margin: '0 auto',
           textAlign: 'center',
           width: '90%'
       };

       return (
           <div style={styles}>
               <h1>
                 Wyszukiwarka gifów
               </h1>
               <p>
                   Znajdź gifa na <a href="http://giphy.com">giphy</a>. Naciśnij Enter by pobrać kolejne gify.
               </p>
               <Search onSearch={this.handleSearch}/>
               <Gif
                   loading={this.state.loading}
                   url={this.state.gif.url}
                   sourceUrl={this.state.gif.sourceUrl}
               />
           </div>
       )
   }
});