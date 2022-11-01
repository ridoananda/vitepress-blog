<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: './rido-ananda.jpg',
    name: 'Rido Ananda',
    title: 'Creator | Writer',
    links: [
      { icon: 'github', link: 'https://github.com/ridoananda' },
      { icon: 'instagram', link: 'https://instagram.com/ridoananda.id' },
      { icon: 'facebook', link: 'https://facebook.com/rido.dev' },
    //   { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
]
</script>

<!-- ## About Me -->

<VPTeamMembers size="medium" :members="members" />