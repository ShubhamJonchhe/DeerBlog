import React from 'react'
import {Footer} from 'flowbite-react';
import { Link } from 'react-router-dom';
import {BsFacebook, BsTwitterX, BsInstagram, BsYoutube} from 'react-icons/bs';

export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-t-emerald-500'>
        <div className='w-full max-w-7xl mx-auto'>
            <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                <div className='mt-5 mr-5'>
                <Link to="/" className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
                    <span className="px-2 py-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 text-white rounded-lg">Deer</span>
                    Blog
                </Link>
                </div>
                <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
                    <div>
                    <Footer.Title title='About'/>
                    <Footer.LinkGroup col>
                        <Footer.Link href='https://deerwalk.edu.np/DWIT/' target='_blank' rel='noopener noreferrer'> 
                            Deerwalk Institute of Technology
                        </Footer.Link>
                        <Footer.Link href='/about' target='_blank' rel='noopener noreferrer'> 
                            DeerBlog
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div>

                    <div>
                    <Footer.Title title='Email & Contact'/>
                    <Footer.LinkGroup col>
                        <Footer.Link href='#'> 
                        contact@deerwalk.edu.np
                        </Footer.Link>
                        <Footer.Link href='#'> 
                        01-4575446
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div>

                    <div>
                    <Footer.Title title='Legal'/>
                    <Footer.LinkGroup col>
                        <Footer.Link href='#'> 
                            Privacy Policy
                        </Footer.Link>
                        <Footer.Link href='#'> 
                            Terms &amp; Conditions
                        </Footer.Link>

                    </Footer.LinkGroup>
                    </div>
                    
                </div>
            </div>
            <Footer.Divider/>
            <div>
                <Footer.Copyright by="Deerwalk Institute of Technology" year={new Date().getFullYear()}  className='flex justify-center' />

                <div className='flex gap-6 mt-4 justify-center'>
                    <Footer.Icon href="https://www.facebook.com/dwit.college/" icon={BsFacebook}/>
                    <Footer.Icon href="https://twitter.com/deerwalkcollege" icon={BsTwitterX}/>
                    <Footer.Icon href="https://www.instagram.com/deerwalk.college/" icon={BsInstagram}/>
                    <Footer.Icon href="https://www.youtube.com/channel/UCkyucMwCIBSqOV_oFHcq9cg" icon={BsYoutube}/>
                </div>
            </div>
        </div>
    </Footer>
  )
}
