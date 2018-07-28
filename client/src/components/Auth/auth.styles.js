export default function styles(theme) {
  return {
    root: {
	  backgroundColor: theme.palette.background.paper,
	  flexGrow: 1,
	  width: '100%'
    },
    videoBg: {
	  background: '#898889',
	  height: '93vh'
    },
    videoForeground: {
	  pointerEvents: 'none'
    },
    btnGroup: {
      marginTop: '20px',
      display: 'flex',
      justifyContent: 'center'
    },
    btn: {
      color: '#fff',
      backgroundColor: '#3f51b5',
      '&:hover': {
        backgroundColor: '#2c387e'
      }
    },
    formStyle: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    },
    formBlock: {
      padding: '50px',
      backgroundColor: '#f5f5f5e3',
      borderRadius: '15px',
      display: 'flex',
      flexDirection: 'column'
    }
  }
}
