import React, { useCallback, useRef, useState } from 'react'
import { rhythm } from '../../utils/typography'
import './index.scss'
import { Item } from './item'

export const Category = ({ categories, category, selectCategory }) => {
  const pastItems = ['essay', 'graphics', 'javascript', 'language', 'project']
  const [pastCategoryVisibility, setPastCategoryVisibility] = useState(false)

  const containerRef = useRef(null)

  const showPastCategory = () => {
    setPastCategoryVisibility(true)
  }

  const scrollToCenter = useCallback(
    tabRef => {
      const { offsetWidth: tabWidth } = tabRef.current
      const { scrollLeft, offsetWidth: containerWidth } = containerRef.current
      const tabLeft = tabRef.current.getBoundingClientRect().left
      const containerLeft = containerRef.current.getBoundingClientRect().left
      const refineLeft = tabLeft - containerLeft
      const targetScollX =
        scrollLeft + refineLeft - containerWidth / 2 + tabWidth / 2

      containerRef.current.scroll({
        left: targetScollX,
        top: 0,
        behavior: 'smooth',
      })
    },
    [containerRef]
  )

  return (
    <ul
      ref={containerRef}
      className="category-container"
      role="tablist"
      id="category"
      style={{
        margin: `0 -${rhythm(3 / 4)}`,
      }}
    >
      <Item
        title={'All'}
        selectedCategory={category}
        onClick={selectCategory}
        scrollToCenter={scrollToCenter}
      />
      {categories
        .filter(item => !pastItems.includes(item))
        .map((title, idx) => (
          <Item
            key={idx}
            title={title}
            selectedCategory={category}
            onClick={selectCategory}
            scrollToCenter={scrollToCenter}
          />
        ))}
      {!pastCategoryVisibility && (
        <Item
          title={'2020'}
          selectedCategory={category}
          onClick={showPastCategory}
          scrollToCenter={scrollToCenter}
        />
      )}

      {pastCategoryVisibility &&
        categories
          .filter(item => pastItems.includes(item))
          .map((title, idx) => (
            <Item
              key={idx}
              title={title}
              selectedCategory={category}
              onClick={selectCategory}
              scrollToCenter={scrollToCenter}
            />
          ))}
    </ul>
  )
}
