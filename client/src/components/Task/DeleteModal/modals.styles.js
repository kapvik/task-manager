export default function styles(theme) {
  return {
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
    modalTitle: {
      marginBottom: '10px'
    }
  }
}
