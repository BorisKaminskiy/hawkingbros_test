import { FC, ReactElement, useCallback, memo } from 'react'
import { Dropdown } from '~/components'
import { IDropDownOption } from '~/types/dropdown'

const values = [
  { id: 1, value: 'Москва' },
  { id: 2, value: 'Владимир' },
  { id: 3, value: 'Новороссийск' },
] as IDropDownOption[]

const HeaderDropDown: FC = memo(({ ...props }): ReactElement => {
  const onDropdownOptionClick = useCallback(() => {
    return
  }, [])

  return (
    <>
      <Dropdown
        initialValue="Choose city"
        values={values}
        onValueChange={onDropdownOptionClick}
        {...props}
      />
    </>
  )
})

export default HeaderDropDown
