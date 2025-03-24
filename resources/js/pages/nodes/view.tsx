import React from 'react';
import { type Node } from '@/types/syslinq/node';
import { BreadcrumbItem } from '@/types';
import NodesLayout from '@/layouts/nodes/layout';
import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { LoaderCircle } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Home',
        href: '/dashboard',
    },
    {
        title: 'Nodes',
        href: '/nodes',
    },
    {
        title: 'View',
        href: '/nodes',
    },
];


const ViewNode: React.FC<{ node: Node }> = ({ node }: { node: Node }) => {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="View Node" />
            <NodesLayout>
                {!node ? <LoaderCircle className={'w-8 h-8 animate-spin'} /> : (
                    <div>
                        <div className={'mb-8 pb-2 space-y-0.5'}>
                            <h2 className="text-xl font-semibold tracking-tight">
                                {node.name}
                                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-sm dark:bg-green-900 dark:text-green-300 ml-2">Online</span>
                            </h2>
                            <p className="text-muted-foreground text-sm">{node.address}</p>
                        </div>
                        Content here!
                    </div>
                )}
            </NodesLayout>
        </AppLayout >
    );
};

export default ViewNode;
