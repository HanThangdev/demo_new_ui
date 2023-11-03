import { logoDarkImg, logoLightImg } from '@/assets/images'
import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <Image src={logoLightImg} alt='logo' className="w-28 object-cover"/>
    </Link>
  )
}
