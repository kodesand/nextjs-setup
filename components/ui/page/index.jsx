import Head from 'next/head'

export default function Page({ children, description, title }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Head>
      {children}
    </div>
  )
}
