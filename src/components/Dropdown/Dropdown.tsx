import { FC, DetailedHTMLProps, HTMLAttributes, useState, memo } from 'react'
import { IDropDownOption } from '~/types/dropdown'
import { Typography, ButtonIcon } from '~/ui'
import { ArrowIcon } from '~/assets/icons'
import cn from 'classnames'
import styles from './Dropdown.module.scss'

interface IDropdownProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  initialValue?: string
  values: IDropDownOption[]
  onValueChange: (item: IDropDownOption) => void
}

const Dropdown: FC<IDropdownProps> = memo(
  ({ initialValue, values, onValueChange, ...props }) => {
    const [activeValue, setActiveValue] = useState<string>(initialValue || '')
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const onHeaderButtonClick = () => setIsOpen((prevState) => !prevState)

    const onValueClick = (item: IDropDownOption) => () => {
      setActiveValue(item.value)
      onValueChange(item)
      setIsOpen(false)
    }

    return (
      <div className={cn(styles.root)} {...props}>
        {activeValue && (
          <div className={cn(styles.header)} onClick={onHeaderButtonClick}>
            <div className={cn(styles.title)} key={activeValue}>
              <Typography variant="t2" color="secondary" isUppercase>
                {activeValue}
              </Typography>
            </div>

            <ButtonIcon isRotate={isOpen} variant="medium">
              <ArrowIcon />
            </ButtonIcon>
          </div>
        )}
        {isOpen && (
          <div className={cn(styles.container)}>
            {values.map((item) => (
              <div
                onClick={onValueClick(item)}
                className={cn(
                  styles.item,
                  item.value === activeValue && styles.item_active,
                )}
                key={item.id}
              >
                <Typography variant="t2" isUppercase>
                  {item.value}
                </Typography>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  },
)

export default Dropdown
