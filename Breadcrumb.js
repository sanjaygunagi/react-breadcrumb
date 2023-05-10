import { Box, Breadcrumbs, Typography, Link } from '@mui/material'

export function HeaderCrums(): JSX.Element {

  const paths = window.location.pathname.split('/').slice(1)

  const breadcrumbs: { title: string; link: string }[] = []
  paths.map((p, index) => {
    breadcrumbs.push({
      title: `${p}`,
      link: `/${paths.slice(0, index + 1).join('/')}`,
    })
  })

  return (
    <Breadcrumbs aria-label='breadcrumb'>
      {breadcrumbs &&
        breadcrumbs.map((b, index) =>
          index !== breadcrumbs.length - 1 ? (
            <Box key={b.title}>
              <Link underline='hover' color='inherit' href={b.link}>
                {b.title}
              </Link>
            </Box>
          ) : (
            <Typography key={b.title} color='text.primary'>
              {b.title}
            </Typography>
          ),
        )}
    </Breadcrumbs>
  )
}
