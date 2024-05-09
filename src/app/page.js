import PrimaryLayout from '@/components/_user/06-layout/theme/PrimaryLayout'

import ComplexCard from '@/components/_user/04-surfaces/card/ComplexCard'
import MediaCard from '@/components/_user/04-surfaces/card/MediaCard'
import ActionCard from '@/components/_user/04-surfaces/card/ActionCard'

export default function Home() {
  return (
    <PrimaryLayout>
      <div>ola</div>
      <ComplexCard
        title="this is a title but could be very longer that can it support :C mothafucka it doesnt work shit crap"
        subtitle='this is a subtitle element'
        image="/images/image_1.jpg"
        content='this is the content of the complex card component this is the content of the complex card component this is the content of the complex card component this is the content of the complex card component this is the content of the complex card component this is the content of the complex card component '
        buttonActions={{text:'ver mas'}}
      />

      <MediaCard image='/images/image_1.jpg' content='this is the content of the complex card component this is the content of the complex card component this is the content of the complex card component this is the content of the complex card component this is the content of the complex card component this is the content of the complex card component ' title='this is a title mothafucka' buttonActions={{text:'ver mas'}}/>

      <ActionCard image='/images/image_1.jpg' title='this is a title mothafucka' content='this is the content of the complex card component this is the content of the complex card component this is the content of the complex card component this is the content of the complex card component this is the content of the complex card component this is the content of the complex card component '/>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </PrimaryLayout >
  )
}
