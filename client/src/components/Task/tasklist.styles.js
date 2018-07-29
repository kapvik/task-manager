export default function styles(theme) {
  return {
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper
    },
    nested: {
      paddingLeft: theme.spacing.unit * 4
    },
    status: {
      color: theme.palette.primary.main,
      fontWeight: 700
    },
    task: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between'
    },
    taskInfo: {
      maxWidth: '75%'
    },
    taskLink: {
      textDecoration: 'none'
    }
  }
}