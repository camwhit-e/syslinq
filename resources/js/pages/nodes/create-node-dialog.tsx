import { router, useForm } from '@inertiajs/react';
import { FormEventHandler, useRef } from 'react';

import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogTitle } from '@/components/ui/dialog';
import { LoaderCircle } from 'lucide-react';

export default function CreateNodeDialog({ open, close }: { open: boolean; close: () => void }) {
    const nameInput = useRef<HTMLInputElement>(null);
    const addressInput = useRef<HTMLInputElement>(null);

    const { data, setData, post, processing, reset, errors, clearErrors } = useForm<Required<{ name: string; address: string }>>({ name: '', address: '' });

    const deleteUser: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('nodes.store'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => addressInput.current?.focus(),
            onFinish: () => closeModal(),
        });
    };

    const closeModal = () => {
        clearErrors();
        reset();
        close();
        router.reload();
    };

    return (
        <Dialog open={open}>
            <DialogContent customCloseAction={closeModal}>
                <DialogTitle>Create a new Node</DialogTitle>
                <DialogDescription>
                    Add a new node to Syslinq in order to collect realtime and historical performance data about your infrastructure.
                </DialogDescription>
                <div className={'h-px border-b mb-2'} />
                <form className="space-y-6" onSubmit={deleteUser}>
                    <div className="grid">
                        <Label htmlFor="password" className={'mb-2'}>
                            Friendly Name
                        </Label>

                        <Input
                            id="name"
                            type="text"
                            name="name"
                            ref={nameInput}
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            placeholder="UK-01"
                        />
                        <p className={'text-xs text-gray-400 mt-1'}>This is a name to be used for the Node.</p>
                        <InputError message={errors.name} />
                    </div>
                    <div className="grid">
                        <Label htmlFor="password" className={'mb-2'}>
                            IP Address/FQDN
                        </Label>

                        <Input
                            id="address"
                            type="text"
                            name="address"
                            ref={addressInput}
                            value={data.address}
                            onChange={(e) => setData('address', e.target.value)}
                            placeholder="http://node.domain.tld:3000"
                        />
                        <p className={'text-xs text-gray-400 mt-1'}>This is the IP address or FQDN for this node.</p>
                        <InputError message={errors.name} />
                    </div>

                    <DialogFooter className="gap-2">
                        <DialogClose asChild>
                            <Button variant="secondary" onClick={closeModal}>
                                Cancel
                            </Button>
                        </DialogClose>

                        <Button variant={'default'} disabled={processing} asChild>
                            <button type="submit">{processing ? <LoaderCircle className={'w-4 h-4 animate-spin'} /> : <>Create</>}</button>
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
