import React from 'react'
import { create } from 'react-test-renderer'
import SocialIconLink from '../social-icon-link'

describe('SocialIconLink Component', () => {
  it('should match snapshot', () => {
    const tree = create(
      <SocialIconLink
        value=""
        label="SSPN"
      />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should match snapshot with null', () => {
    const tree = create(<SocialIconLink value="" label="SSPN" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
