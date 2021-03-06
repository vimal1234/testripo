import { Meteor } from 'meteor/meteor';
import { Logger } from '../../../../../lib/client/Logger';
import GameAnalysisComponent from '../../RightSidebar/GameAnalysisComponent';
const log = new Logger('Css/CssManager_js');
/**
 * CssManager
 */
export default class CssManager {
	constructor(css) {
		const us = this;
    //this._styleObject = developmentcss; // Default when nothing is loaded
    this._boardStyle = this.search('board',developmentcss);
    this._playerStyle = this.search("player", developmentcss);
    this._rightBarStyle = this.search("rightBar", developmentcss);
		Meteor.call('getcss', css, function(error, result) {
			if (error) log.error(error);
			us._boardStyle = result;
		});
  }
  search(typeKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].type === typeKey) {
          return myArray[i];
        }
    }
}
	/**
   *
   * @param squareColor 'b' or 'w' for the color of the square
   * @param piece null, or the piece that's on the square
   * @param color null, or the color of the piece that's on the square
   */
	squareStyle(squareColor, piece, color, side) {
		var style = { width: side, height: side };
		if (this._boardStyle.square.all)
      Object.assign(style, this._boardStyle.square.all);
		Object.assign(style, this._boardStyle.square[squareColor]);

		if (!!piece && !!color) {
			if (this._boardStyle.pieces.all)
        Object.assign(style, this._boardStyle.pieces.all);
			Object.assign(style, this._boardStyle.pieces[color][piece]);
		}

		return style;
	}
	flags(country){
    	var style = {};
		if (this._playerStyle.flags.all)
      Object.assign(style, this._playerStyle.flags.all);
    Object.assign(style, this._playerStyle.flags[country]);
    
    return style;
  }
  
  tagline(){
    	var style={};
      Object.assign(style, this._playerStyle.tagline.all);
      return style;
	}
  username(){
    	var style = {};
      Object.assign(style, this._playerStyle.username.all);
      return style;
  }
  
  clock(){
    var style = {};
    Object.assign(style, this._playerStyle.clock.all);
    return style;
  }
  //This css code for Right sidebar
  settingIcon(){
    var style = {};
    Object.assign(style, this._rightBarStyle.settingIcon.all);
    return style;
  }
  rightTopContent(){
      var style = {};
      Object.assign(style, this._rightBarStyle.rightTopContent.all);
      return style;
  }
   rightBottomContent(){
      var style = {};
      Object.assign(style, this._rightBarStyle.rightBottomContent.all);
      return style;
  }
  	actionButtonImage(imageName){
    	var style = {};
	/*	if (this._rightBarStyle.actionButtonImage.all)
      Object.assign(style, this._rightBarStyle.actionButtonImage.all);
    */
      Object.assign(style, this._rightBarStyle.actionButtonImage[imageName]);
      return style;
  }
  	gameAnalysisIcon(){
    	var style = {};
      Object.assign(style, this._rightBarStyle.gameAnalysisIcon.all);
      return style;
  }
gameSheetDownloadIcon(){
    	var style = {};
      Object.assign(style, this._rightBarStyle.gameSheetDownloadIcon.all);
      return style;
  }
gameShareIcon(){
    	var style = {};
      Object.assign(style, this._rightBarStyle.gameShareIcon.all);
      return style;
  }
  chatContent(){
    	var style = {};
      Object.assign(style, this._rightBarStyle.chatContent.all);
      return style;
  }
   chatInputBox(){
    	var style = {};
      Object.assign(style, this._rightBarStyle.chatInputBox.all);
      return style;
  }
 chatSendButton(){
    	var style = {};
      Object.assign(style, this._rightBarStyle.chatSendButton.all);
      return style;
  }
  
  //
	// TODO: There is no point in having canvas as a database item. Just put it directly into the component.
	//
	squareCanvasStyle(side) {
		return {
			position: 'absolute',
			top: 0,
			left: 0,
			zIndex: 2
		};
	}

	ribbonMoveList() {
		return {};
	}
	/**
   *
   * @param which Position of the text
   * @param color Color of the square
   */
	internalRankAndFileStyle(which, color, side) {
		const style = {}; // width: side, height: side };

		if (this._boardStyle.internal_rank_and_file.all)
      Object.assign(style, this._boardStyle.internal_rank_and_file.all);

		Object.assign(style, this._boardStyle.internal_rank_and_file.color[color]);
		Object.assign(style, this._boardStyle.internal_rank_and_file.position[which]);

		return style;
	}

	/**
   *
   * @param which Position of the text
   * @param color Color of the square
   */
	externalRankAndFileStyle(side) {
		const style = { width: side, height: side };

		if (this._boardStyle.external_rank_and_file.all)
      Object.assign(style, this._boardStyle.external_rank_and_file.all);

		return style;
	}
}

const developmentcss = [
  {
    name: "developmentcss",
    type: "rightBar",
    settingIcon: {
      all: {
        position: "absolute",
        left: "-40px",
        top: "10px"
      }
    },
    rightTopContent: {
      all: {
        height: "55vh"
      }
    },
    rightBottomContent: {
      all: {
        height: "45vh"
      }
    },
    actionButtonImage: {
      takeback: {
        backgroundImage: "mages/take-forward-icon.png"
      },
      draw: {
        backgroundImage: "images/draw-icon.png"
      },
      resign: {
        backgroundImage: "images/resign-icon.png"
      },
      abort: {
        backgroundImage: "images/abort-icon.png"
      }
    },
    gameAnalysisIcon: {
      all: {
        backgroundImage: "images/live-analisys-icon.png"
      }
    },
    gameSheetDownloadIcon: {
      all: {
        backgroundImage: "images/download-icon-gray.png"
      }
    },
    gameShareIcon:{
      
    all:{
      backgroundImage:"images/share-icon-gray.png"
    }
    },
    chatContent:{
      all:{
      padding: "20px 15px",
      maxHeight: "230px",
      overflowY: "scroll",
      minHeight: "230px"
      }
    },
   
    chatInputBox:{
  all:{
    position:"absolute",
    padding: "0 0px",
    borderTop: "#ccc solid 1px !important",
    maxWidth: "100%",
    width: "100%",
    bottom: "0px",
    background: "#fff"
  }
},
chatSendButton:{
  all:{
    background: "../../../../images/send-btn.png",
    position: "absolute",
    right: "0",
    top: "0",
    width: "50px",
    height: "50px",
    border: "none",
    outline: "none",
    cursor: "pointer"
  }
}
    
  },
  {
    name: "developmentcss",
    type: "player",

    tagline: {
      all: {
        marginTop: "10px",
        marginLeft: "10px"
      }
    },

    username: {
      all: {
        color: "#fff",
        fontSize: "18px",
        fontWeight: "600",
        marginRight: "15px"
      }
    },
    flags: {
      all: {
        backgroundImage: "../../../../../images/user-flag.png"
      },
      in: {
        backgroundImage: "india.png"
      },
      us: {
        backgroundImage: "../../../../../images/user-flag.png"
      }
    },
    clock: {
      all: {
        position: "absolute",
        right: "0",
        height: "auto",
        lineHeight: "30px",
        padding: "6px 20px",
        textAlign: "right",
        borderRadius: "3px",
        fontSize: "19px",
        color: "#fff",
        top: "5px",
        background: "#333333",
        fontWeight: "700"
      }
    }
  },
  {
    name: "developmentcss",
    type: "board",

    square: {
      all: {},
      w: {
        backgroundColor: "green"
      },
      b: {
        backgroundColor: "yellow"
      }
    },
    external_rank_and_file: {
      all: {
        float: "left",
        position: "relative",
        color: "black"
      }
    },
    internal_rank_and_file: {
      all: {
        position: "absolute",
        zIndex: 3
      },
      color: {
        w: {
          color: "red"
        },
        b: {
          color: "white"
        }
      },
      position: {
        tl: {
          top: 0,
          left: 0
        },
        tr: {
          top: 0,
          right: 0,
          textAlign: "right"
        },
        bl: {
          bottom: 0,
          left: 0
        },
        br: {
          bottom: 0,
          right: 0,
          textAlign: "right"
        }
      }
    },
    pieces: {
      all: {
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        backgroundPosition: "center"
      },
      w: {
        r: {
          backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg)`
        },
        b: {
          backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg)`
        },
        n: {
          backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg)`
        },
        q: {
          backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg)`
        },
        k: {
          backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg)`
        },
        p: {
          backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg)`
        }
      },
      b: {
        r: {
          backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg)`
        },
        b: {
          backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg)`
        },
        n: {
          backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg)`
        },
        q: {
          backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg)`
        },
        k: {
          backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg)`
        },
        p: {
          backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg)`
        }
      }
    }
  }
];
