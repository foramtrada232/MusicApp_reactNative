import React, { Component } from "react";
// // import ReactDOM from "react-dom";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
  SafeAreaView,
  CheckBox,
  ImageBackground,
  FlatList
} from 'react-native';
// const campfireStory = "yourURLorIMPORTtoYOURmp3";
// const bootingUp = "yourURLorIMPORTtoYOURmp3";

// function getTime(time) {
//   if (!isNaN(time)) {
//     return (
//       Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
//     );
//   }
// }

export default class Demo extends Component {
    //   state = {
    //     selectedTrack: null,
    //     player: "stopped",
    //     currentTime: null,
    //     duration: null
    //   };

    //   componentDidMount() {
    //     this.player.addEventListener("timeupdate", e => {
    //       this.setState({
    //         currentTime: e.target.currentTime,
    //         duration: e.target.duration
    //       });
    //     });
    //   }

    //   componentWillUnmount() {
    //     this.player.removeEventListener("timeupdate", () => {});
    //   }

    //   componentDidUpdate(prevProps, prevState) {
    //     if (this.state.selectedTrack !== prevState.selectedTrack) {
    //       let track;
    //       switch (this.state.selectedTrack) {
    //         case "Campfire Story":
    //           track = campfireStory;
    //           break;
    //         case "Booting Up":
    //           track = bootingUp;
    //           break;
    //         default:
    //           break;
    //       }
    //       if (track) {
    //         this.player.src = track;
    //         this.player.play();
    //         this.setState({ player: "playing", duration: this.player.duration });
    //       }
    //     }
    //     if (this.state.player !== prevState.player) {
    //       if (this.state.player === "paused") {
    //         this.player.pause();
    //       } else if (this.state.player === "stopped") {
    //         this.player.pause();
    //         this.player.currentTime = 0;
    //         this.setState({ selectedTrack: null });
    //       } else if (
    //         this.state.player === "playing" &&
    //         prevState.player === "paused"
    //       ) {
    //         this.player.play();
    //       }
    //     }
    //   }

    render() {
        //     const list = [
        //       { id: 1, title: "Campfire Story" },
        //       { id: 2, title: "Booting Up" }
        //     ].map(item => {
        //       return (
        //         <li
        //           key={item.id}
        //           onClick={() => this.setState({ selectedTrack: item.title })}
        //         >
        //           {item.title}
        //         </li>
        //       );
        //     });

        //     const currentTime = getTime(this.state.currentTime);
        //     const duration = getTime(this.state.duration);

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Profile!</Text>
            </View>
        )
        //       <>
        //         {/* <h1>My Little Player</h1> */}
        //         <ul>{list}</ul>
        //         <div>
        //           {this.state.player === "paused" && (
        //             <button onClick={() => this.setState({ player: "playing" })}>
        //               Play
        //             </button>
        //           )}
        //           {this.state.player === "playing" && (
        //             <button onClick={() => this.setState({ player: "paused" })}>
        //               Pause
        //             </button>
        //           )}
        //           {this.state.player === "playing" || this.state.player === "paused" ? (
        //             <button onClick={() => this.setState({ player: "stopped" })}>
        //               Stop
        //             </button>
        //           ) : (
        //             ""
        //           )}
        //         </div>
        //         {this.state.player === "playing" || this.state.player === "paused" ? (
        //           <div>
        //             {currentTime} / {duration}
        //           </div>
        //         ) : (
        //           ""
        //         )}
        //         <audio ref={ref => (this.player = ref)} />
        //       </>
        //     );
        //   }
    }
}

// // const rootElement = document.getElementById("root");
// // ReactDOM.render(<App />, rootElement);