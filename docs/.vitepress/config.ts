export default {
    title: "Rido's Blog",
    description: "More ",
    base: '/vitepress-blog/',
    // cleanUrls: 'without-subfolders',
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        socialLinks: [
            { icon: 'github', link: 'https://github.com/ridoananda/vitepress-blog' }
        ],
        sidebar: {
            '/matkul/': [
                {
                    text: 'Semester 1',
                    collapsible: true,
                    items: [
                        {
                            text: 'Sistem Operasi',
                            link: '/matkul/1/sistem-operasi',
                            items: [
                                {
                                    text: '1.1 Pengertian Sistem Operasi Komputer',
                                    link: '/matkul/1/sistem-operasi/1.1-pengertian-sistem-operasi-komputer'
                                },
                                {
                                    text: '1.2 Fungsi Sistem Operasi',
                                    link: '/matkul/1/sistem-operasi/1.2-fungsi-sistem-operasi'
                                },
                                {
                                    text: '1.3 Cara Kerja Sistem Operasi dalam Sistem Komputer',
                                    link: '/matkul/1/sistem-operasi/1.3-cara-kerja-os'
                                },
                                {
                                    text: '1.4 Contoh Sistem Operasi Komputer',
                                    link: '/matkul/1/sistem-operasi/1.4-contoh-os-komputer'
                                },
                                {
                                    text: '1.5 Struktur Teks Algoritma',
                                    link: '/matkul/1/sistem-operasi/1.5-struktur-teks-algoritma'
                                },
                            ]
                        },
                        {
                            text: 'Aplikasi Komputer',
                            link: '/matkul/1/aplikom',
                            items: [{
                                text: '1.1 Microsoft Office',
                                link: '/matkul/1/aplikom/1.1-microsoft-office'
                            }]
                        },
                        { text: 'Interaksi Manusia dan Komputer', link: '/matkul/1/imk' },
                        { text: 'Pengantar Teknologi Informasi', link: '/matkul/1/pti' },
                        { text: 'Matematika Diskrit', link: '/matkul/1/madis' },
                        { text: 'Algoritma dan Pemrograman', link: '/matkul/1/algopro' },
                        { text: 'Design Grafis (Coreldraw & Photoshop)', link: '/matkul/1/design-grafis' },
                        { text: 'Sistem Basis Data', link: '/matkul/1/sisbadata' },
                        { text: 'Arsitektur dan Organisasi Komputer', link: '/matkul/1/aok' },
                    ]
                },
            ]
        },
        nav: [
            { text: 'Home', link: '/' },
            { text: 'About', link: '/about' },
        ],
        footer: {
            message: 'Made with <a href="https://vitepress.vuejs.org">Vitepress</a>',
            copyright: 'Copyright © 2022 Rido Ananda'
        }
    }
}