export default function styles(theme) {
  return {
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginLeft: -18,
      marginRight: 10
    },
    paper: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
      marginTop: 15
    },
    comments: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper
    },
    nested: {
      paddingLeft: theme.spacing.unit * 4
    },
    button: {
      margin: theme.spacing.unit
    },
    fab: {
      position: 'absolute',
      bottom: theme.spacing.unit * 2,
      right: theme.spacing.unit * 2
    },
    relative: {
      position: 'relative'
    },
    commentTitle: {
      textAlign: 'center',
      color: theme.palette.primary.main
    },
    status: {
      color: theme.palette.primary.main,
      fontWeight: 700
    },
    attachments: {
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap'
    },
    btn: {
      color: '#fff'
    },
    taskHeader: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }
}
