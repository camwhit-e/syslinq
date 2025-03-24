import classNames from 'classnames';

export default function Heading({ title, description, border }: { title: string; description?: string; border?: boolean }) {
    return (
        <div className={classNames(border && 'border-b-2 w-fit', 'mb-8 pb-2 space-y-0.5')}>
            <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
            {description && <p className="text-muted-foreground text-sm">{description}</p>}
        </div>
    );
}
