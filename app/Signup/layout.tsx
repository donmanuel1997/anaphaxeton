export const metadata = {
  title: 'ANAPHAXETON BOT',
  description: 'ChatGPT AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <body>{children}</body>
    </html>
  )
}
