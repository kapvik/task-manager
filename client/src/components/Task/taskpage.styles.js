export default function styles(theme) {
  return {
    root: {
      flexGrow: 1
    },
    taskHeader: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    btn: {
      color: theme.palette.primary.contrastText
    }
  }
}
