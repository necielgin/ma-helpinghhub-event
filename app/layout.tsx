import { Provider } from "@/components/ui/provider"

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  return (
    <html suppressHydrationWarning>
        <head>
            <title>Helping Hub</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/logo.png" />
        </head>
        <body style={{ backgroundImage: `url(/background.png)`,
          backgroundSize: 'cover', 
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          fontFamily: 'Inter, sans-serif'
          }}>
          <Provider>{children}</Provider>
        </body>
    </html>
)
}
