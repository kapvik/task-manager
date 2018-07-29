export default function styles(theme) {
  return {
    btnGroup: {
      marginTop: '20px',
      display: 'flex',
      justifyContent: 'center'
    },
    formEdit: {
      marginTop: '50px',
      textAlign: 'center'
    },
    btn: {
      color: '#fff',
      backgroundColor: '#3f51b5',
      '&:hover': {
        backgroundColor: '#2c387e'
      },
      '&:not(:last-of-type)': {
        marginRight: '15px'
      }
    },
    paper: {
      position: 'absolute',
      mawWidth: theme.spacing.unit * 50,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing.unit * 4
    },
    modalCenter: {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '10px'
    },
    modalWrapper: {
      backgroundColor: '#c1c6e0a8',
      width: '99%',
      height: '100vh',
      position: 'absolute',
      top: 0,
      zIndex: 9990
    },
    customSelect: {
      'padding': '10px',
      'backgroundColor': '#fff',
      'border': 'none',
      'borderBottom': '1px solid #c7c7c7',
      'color': '#3f51b5',
      'fontSize': '16px',
      'margin': '5px auto',
      'width': '100%',
      '&:hover': {
        borderBottom: '1px solid #000',
        color: '#000'
      },
      '&:focus': {
        outline: 'none'
      }
    }
  }
}
