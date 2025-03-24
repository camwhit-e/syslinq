import Heading from '@/components/heading';
import { Icon } from '@/components/icon';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import CreateNodeDialog from '@/pages/nodes/create-node-dialog';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { GitCompare, Plus } from 'lucide-react';
import { useState, type PropsWithChildren } from 'react';

const sidebarNavItems: NavItem[] = [
    {
        title: 'All Nodes',
        href: '/nodes',
        icon: null,
    },
    {
        title: 'Compare',
        href: '/nodes/compare',
        icon: GitCompare,
    }
];

type NodeDialog = 'create' | null;

export default function NodesLayout({ children }: PropsWithChildren) {
    const [dialog, setDialog] = useState<NodeDialog>(null);

    // When server-side rendering, we only render the layout on the client...
    if (typeof window === 'undefined') {
        return null;
    }

    const currentPath = window.location.pathname;

    return (
        <div className="px-4 py-6">
            <CreateNodeDialog open={dialog === 'create'} close={() => setDialog(null)} />
            <Heading title="Nodes" description="Modify and interact with nodes connected to Syslinq" border />

            <div className="flex flex-col space-y-8 lg:flex-row lg:space-y-0 lg:space-x-12">
                <aside className="w-full max-w-xl lg:w-48">
                    <nav className="flex flex-col space-y-1 space-x-0">
                        {sidebarNavItems.map((item) => (
                            <Button
                                key={item.href}
                                size="sm"
                                variant="ghost"
                                asChild
                                className={cn('w-full justify-start', {
                                    'bg-muted': currentPath === item.href,
                                })}
                            >
                                <Link href={item.href} prefetch>
                                    {item.icon && <Icon iconNode={item.icon} />} {item.title}
                                </Link>
                            </Button>
                        ))}
                        <Button
                            key={'hi'}
                            size="sm"
                            variant="ghost"
                            asChild
                            className={'w-full justify-start cursor-pointer'}
                        >
                            <div onClick={() => setDialog('create')}><Plus /> Create New</div>
                        </Button>
                    </nav>
                </aside>

                <Separator className="my-6 md:hidden" />

                <div className="flex-1 md:max-w-2xl">
                    <section className="max-w-xl space-y-12">{children}</section>
                </div>
            </div>
        </div>
    );
}
