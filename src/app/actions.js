'use server'
import { revalidateTag } from 'next/cache'
 
export  async function action() {
  revalidateTag('collection')
}

export async function deleteaction() {
  revalidateTag('deletecollection')
}