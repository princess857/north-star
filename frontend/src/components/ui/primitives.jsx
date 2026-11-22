import * as AvatarPrimitive from '@radix-ui/react-avatar'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { cva } from 'class-variance-authority'

const buttonStyles = cva('button', {
  variants: {
    variant: { primary: 'button-primary', secondary: 'button-secondary', ghost: 'button-ghost', danger: 'button-danger' },
    size: { default: '', small: 'button-small', icon: 'button-icon' },
  },
  defaultVariants: { variant: 'primary', size: 'default' },
})

export function Button({ className, variant, size, type = 'button', ...props }) {
  return <button type={type} className={`${buttonStyles({ variant, size })}${className ? ` ${className}` : ''}`} {...props} />
}

export function Avatar({ src, name, size = 'md', className = '' }) {
  return <AvatarPrimitive.Root className={`avatar avatar-${size} ${className}`}><AvatarPrimitive.Image src={src} alt={name} className="avatar-image" /><AvatarPrimitive.Fallback className="avatar-fallback" delayMs={300}>{name?.split(' ').map((part) => part[0]).slice(0, 2).join('')}</AvatarPrimitive.Fallback></AvatarPrimitive.Root>
}

export { DropdownMenu }