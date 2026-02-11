import { Layout, Navbar, Footer } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'
import { Head } from 'nextra/components'
import 'nextra-theme-docs/style.css'
import './globals.css'

export const metadata = {
    title: 'Reex API Builder Documentation',
    description: 'Documentation for Reex API Builder',
}

const footer = (
    <Footer>
        MIT {new Date().getFullYear()} © Reex API Builder.
    </Footer>
)

const navbar = (
    <Navbar
        logo={<b>Reex API Builder</b>}
        projectLink="https://github.com/EECvision/Reex-api-client"
    />
)

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <Head />
            <body>
                <Layout
                    navbar={navbar}
                    // @ts-ignore
                    pageMap={await getPageMap()}
                    footer={footer}
                    editLink="Edit this page on GitHub"
                    docsRepositoryBase="https://github.com/EECvision/Reex-api-client/tree/main/docs"
                    sidebar={{ defaultMenuCollapseLevel: 1 }}
                    toc={{ float: true, title: "On This Page" }}
                >
                    {children}
                </Layout>
            </body>
        </html>
    )
}
